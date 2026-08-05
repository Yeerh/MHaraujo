import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fadeUp";
import { createWhatsAppUrl, sobreSection, whatsappMessages } from "../../data/siteData";
import ImageWithFallback from "../common/ImageWithFallback";

export default function Sobre() {
  return (
    <section id="sobre" className="section">
      <div className="container panel panel-dark">
        <div className="panel-accent">✦</div>
        <div className="sobre-grid">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="sobre-photo-wrap">
            <div className="sobre-photo-card">
              <ImageWithFallback src="/images/hero-mobile-matheus.png" alt="Matheus em sessão de treino" className="sobre-photo" />
            </div>
            <div className="sobre-tag">{sobreSection.tag}</div>
          </motion.div>

          <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="eyebrow">{sobreSection.eyebrow}</p>
            <h2 className="section-title">
              {sobreSection.titulo.map((linha) => (
                <span key={linha}>{linha}</span>
              ))}
              {sobreSection.destaque && <span className="neon">{sobreSection.destaque}</span>}
            </h2>

            <div className="sobre-copy">
              {sobreSection.paragrafos.map((paragrafo) => (
                <p key={paragrafo} className="section-text">
                  {paragrafo}
                </p>
              ))}
            </div>

            <a className="btn btn-primary sobre-cta" href={createWhatsAppUrl(whatsappMessages.evolucao)} target="_blank" rel="noreferrer">
              {sobreSection.botao}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
