import { useEffect } from "react";
import { motion, MotionConfig } from "framer-motion";
import LogoCursor from "../layout/LogoCursor";
import { createWhatsAppUrl, whatsappMessages } from "../../data/siteData";

const errorContent = {
  404: {
    eyebrow: "ERRO 404",
    title: "PÁGINA NÃO ENCONTRADA",
    description: "Este endereço não existe ou foi movido. Volte ao início para continuar sua evolução.",
  },
  505: {
    eyebrow: "ERRO 505",
    title: "VERSÃO HTTP NÃO SUPORTADA",
    description: "Não foi possível concluir a solicitação com esta versão do protocolo. Volte ao início ou tente novamente em instantes.",
  },
};

export default function ErrorPage({ code }) {
  const content = errorContent[code];

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${code} | Matheus Araújo`;
    return () => {
      document.title = previousTitle;
    };
  }, [code]);

  return (
    <MotionConfig reducedMotion="user">
      <LogoCursor />
      <div className="error-page">
        <div className="error-page-shade" aria-hidden="true" />

        <header className="error-header container">
          <a href="/" className="error-brand" aria-label="Ir para a página inicial">
            <img src="/images/hero-logo-matheus.png" alt="Logo Matheus Araújo" />
            <span>
              <strong>Matheus Araújo</strong>
              <small>Personal Trainer</small>
            </span>
          </a>
        </header>

        <main className="error-main container">
          <motion.div
            className="error-content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="error-eyebrow">{content.eyebrow}</span>
            <p className="error-code" aria-hidden="true">{code}</p>
            <h1>{content.title}</h1>
            <p className="error-description">{content.description}</p>

            <div className="error-actions">
              <a className="btn btn-primary" href="/">VOLTAR AO INÍCIO</a>
              <a
                className="btn btn-dark"
                href={createWhatsAppUrl(whatsappMessages.contato)}
                target="_blank"
                rel="noreferrer"
              >
                FALAR NO WHATSAPP
              </a>
            </div>
          </motion.div>
        </main>

        <footer className="error-footer container">
          <span>#TEAMMA</span>
          <p>Treino, método e acompanhamento.</p>
        </footer>
      </div>
    </MotionConfig>
  );
}
