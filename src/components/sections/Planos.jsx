import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp } from "../../animations/fadeUp";
import { createWhatsAppUrl, planos, planosSection, whatsappMessages } from "../../data/siteData";
import AnamneseModal from "../common/AnamneseModal";

const glowBounds = new WeakMap();

export default function Planos() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const closeAnamnese = useCallback(() => setSelectedPlan(null), []);

  const moveCardGlow = (event) => {
    if (event.pointerType !== "mouse") return;

    const card = event.currentTarget;
    const bounds = glowBounds.get(card) || card.getBoundingClientRect();
    card.style.setProperty("--glow-x", `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
    card.style.setProperty("--glow-y", `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
  };

  const startCardGlow = (event) => {
    if (event.pointerType === "mouse") glowBounds.set(event.currentTarget, event.currentTarget.getBoundingClientRect());
  };

  const stopCardGlow = (event) => glowBounds.delete(event.currentTarget);

  return (
    <>
      <section id="planos" className="section">
        <div className="container panel panel-dark">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="center-head">
            <p className="eyebrow">{planosSection.eyebrow}</p>
            <h2 className="section-title center plans-title">{planosSection.titulo}</h2>
            <p className="section-text center plans-subtitle">{planosSection.subtitulo}</p>
          </motion.div>

          <div className="plan-grid">
            {planos.map((plano, index) => (
              <motion.article
                key={plano.numero}
                className={`plan-card plan-card-${plano.destaque}`}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onPointerEnter={startCardGlow}
                onPointerMove={moveCardGlow}
                onPointerLeave={stopCardGlow}
              >
                <div className="plan-head">
                  <div className="plan-number">{plano.numero}</div>
                  {plano.selo ? <span className="popular-badge">{plano.selo}</span> : <span className="plan-head-spacer" aria-hidden="true" />}
                </div>

                <div className="plan-content">
                  <h3>{plano.titulo}</h3>
                  <p className="plan-description">{plano.descricao}</p>

                  <div className="plan-teaser">
                    <span className="plan-teaser-label">Por que esse plano chama atenção</span>
                    <p>{plano.interesse}</p>
                  </div>

                  <div className="plan-block">
                    <span className="plan-block-title">O que oferece</span>
                    <ul className="plan-benefits">
                      {plano.beneficios.map((beneficio) => (
                        <li key={beneficio}>
                          <span className="dot" />
                          <span>{beneficio}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    className={`btn plan-button ${plano.destaque === "popular" ? "plan-button-primary" : ""}`}
                    aria-label={`${plano.botao}. Responder anamnese rápida.`}
                    onClick={() => setSelectedPlan(plano)}
                  >
                    {plano.botao}
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="plans-cta">
            <p>{planosSection.ctaTexto}</p>
            <a className="btn btn-primary btn-big" href={createWhatsAppUrl(whatsappMessages.planos)} target="_blank" rel="noreferrer">
              {planosSection.ctaBotao}
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedPlan && <AnamneseModal key={selectedPlan.numero} plano={selectedPlan} onClose={closeAnamnese} />}
      </AnimatePresence>
    </>
  );
}
