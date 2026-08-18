import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp } from "../../animations/fadeUp";
import { createWhatsAppUrl, planos, planosSection, whatsappMessages } from "../../data/siteData";
import AnamneseModal from "../common/AnamneseModal";

export default function Planos() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const closeAnamnese = useCallback(() => setSelectedPlan(null), []);

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
              >
                <div className="plan-content">
                  {plano.selo && <span className="popular-badge">{plano.selo}</span>}
                  <h3>{plano.titulo}</h3>
                  <p className="plan-description">{plano.descricao}</p>

                  <p className="plan-audience"><strong>Indicado para:</strong> {plano.interesse}</p>

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
