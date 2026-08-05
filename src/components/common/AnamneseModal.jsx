import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { createWhatsAppUrl } from "../../data/siteData";

const questions = [
  {
    id: "objetivo",
    title: "Qual é o seu principal objetivo?",
    options: [
      "Emagrecer e reduzir medidas",
      "Ganhar massa muscular",
      "Melhorar condicionamento e saúde",
      "Definir e recompor o físico",
    ],
  },
  {
    id: "experiencia",
    title: "Qual é a sua experiência com treinos?",
    options: [
      "Estou começando agora",
      "Treino há menos de 1 ano",
      "Treino há 1 a 3 anos",
      "Treino há mais de 3 anos",
    ],
  },
  {
    id: "disponibilidade",
    title: "Quantos dias por semana você consegue treinar?",
    options: ["2 dias", "3 dias", "4 dias", "5 dias ou mais"],
  },
  {
    id: "restricoes",
    title: "Há alguma dor, lesão ou restrição que devemos considerar?",
    options: [
      "Não tenho",
      "Tenho alguma dor ou lesão",
      "Tenho uma restrição médica",
      "Prefiro explicar na conversa",
    ],
  },
];

export default function AnamneseModal({ plano, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const questionRef = useRef(null);
  const currentQuestion = questions[currentStep];
  const currentAnswer = answers[currentQuestion.id];
  const isLastStep = currentStep === questions.length - 1;

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 80);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = [
        ...dialogRef.current.querySelectorAll('a[href], button:not([disabled]), input:not([disabled])'),
      ].filter((element) => element.tabIndex !== -1);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  useEffect(() => {
    if (currentStep === 0) return undefined;

    const focusTimer = window.setTimeout(() => questionRef.current?.querySelector("input")?.focus(), 60);
    return () => window.clearTimeout(focusTimer);
  }, [currentStep]);

  const whatsappMessage = useMemo(() => {
    const answerLines = questions.map((question) => `• ${question.title}\n${answers[question.id] || "Não respondido"}`);

    return [
      "Olá, Matheus! Escolhi um plano no seu site e respondi à anamnese rápida.",
      "",
      `*Plano escolhido: ${plano.titulo}*`,
      "",
      ...answerLines,
      "",
      "Com base nessas respostas, esse plano é indicado para mim? Gostaria de entender os próximos passos.",
    ].join("\n");
  }, [answers, plano.titulo]);

  const selectAnswer = (answer) => {
    setAnswers((currentAnswers) => ({ ...currentAnswers, [currentQuestion.id]: answer }));
  };

  return (
    <motion.div
      className="anamnese-layer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
    >
      <button className="anamnese-backdrop" type="button" aria-label="Fechar anamnese" tabIndex={-1} onClick={onClose} />

      <motion.section
        ref={dialogRef}
        className="anamnese-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="anamnese-title"
        aria-describedby="anamnese-privacy"
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      >
        <header className="anamnese-header">
          <div>
            <span className="anamnese-eyebrow">Anamnese rápida</span>
            <h2 id="anamnese-title">{plano.titulo}</h2>
          </div>
          <button ref={closeButtonRef} className="anamnese-close" type="button" aria-label="Fechar anamnese" onClick={onClose}>
            <span />
            <span />
          </button>
        </header>

        <div className="anamnese-progress-wrap">
          <div className="anamnese-progress-copy" aria-live="polite">
            <span>Pergunta {currentStep + 1} de {questions.length}</span>
            <strong>{Math.round(((currentStep + 1) / questions.length) * 100)}%</strong>
          </div>
          <div className="anamnese-progress" aria-hidden="true">
            {questions.map((question, index) => (
              <span key={question.id} className={index <= currentStep ? "active" : ""} />
            ))}
          </div>
        </div>

        <motion.fieldset
          ref={questionRef}
          key={currentQuestion.id}
          className="anamnese-question"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
        >
          <legend>{currentQuestion.title}</legend>
          <div className="anamnese-options">
            {currentQuestion.options.map((option, index) => (
              <label key={option} className={currentAnswer === option ? "selected" : ""}>
                <input
                  type="radio"
                  name={currentQuestion.id}
                  value={option}
                  checked={currentAnswer === option}
                  onChange={() => selectAnswer(option)}
                />
                <span className="anamnese-option-index">{String(index + 1).padStart(2, "0")}</span>
                <span>{option}</span>
                <span className="anamnese-radio" aria-hidden="true" />
              </label>
            ))}
          </div>
        </motion.fieldset>

        <footer className="anamnese-footer">
          <p id="anamnese-privacy">Leva menos de 1 minuto. Suas respostas não ficam salvas neste site.</p>
          <div className="anamnese-actions">
            <button
              className="anamnese-back"
              type="button"
              disabled={currentStep === 0}
              onClick={() => setCurrentStep((step) => Math.max(0, step - 1))}
            >
              Voltar
            </button>

            {isLastStep ? (
              <a
                className={`btn anamnese-next anamnese-submit ${currentAnswer ? "" : "disabled"}`}
                href={currentAnswer ? createWhatsAppUrl(whatsappMessage) : undefined}
                target="_blank"
                rel="noreferrer"
                aria-disabled={!currentAnswer}
                tabIndex={currentAnswer ? 0 : -1}
                onClick={currentAnswer ? onClose : undefined}
              >
                Enviar pelo WhatsApp <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <button
                className="btn anamnese-next"
                type="button"
                disabled={!currentAnswer}
                onClick={() => setCurrentStep((step) => Math.min(questions.length - 1, step + 1))}
              >
                Continuar <span aria-hidden="true">→</span>
              </button>
            )}
          </div>
        </footer>
      </motion.section>
    </motion.div>
  );
}
