import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fadeUp";
import { planos, planosSection, whatsappUrl } from "../../data/siteData";

export default function Planos() {
  return (
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
              <div className="plan-head">
                <div className="plan-number">{plano.numero}</div>
                {plano.selo ? <span className="popular-badge">{plano.selo}</span> : <span className="plan-head-spacer" aria-hidden="true" />}
              </div>

              <div className="plan-content">
                <h3>{plano.titulo}</h3>
                <p className="plan-description">{plano.descricao}</p>

                <div className="plan-highlight">
                  <span className="plan-price-label">{plano.precoLabel}</span>
                  <div className="plan-price-main">
                    <strong>{plano.precoValor}</strong>
                    <span>{plano.precoPeriodo}</span>
                  </div>
                </div>

                <div className="plan-block">
                  <span className="plan-block-title">Inclui</span>
                  <ul className="plan-benefits">
                    {plano.beneficios.map((beneficio) => (
                      <li key={beneficio}>
                        <span className="dot" />
                        <span>{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="plan-block">
                  <span className="plan-block-title">Valores</span>
                  <div className="plan-pricing-grid">
                    {plano.valores.map((item) => (
                      <div key={item.periodo} className="plan-pricing-item">
                        <span>{item.periodo}</span>
                        <strong>{item.valor}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  className={`btn plan-button ${plano.destaque === "popular" ? "plan-button-primary" : ""}`}
                  href={`${whatsappUrl}?text=${encodeURIComponent(plano.mensagemWhatsapp)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {plano.botao}
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="plans-cta">
          <p>{planosSection.ctaTexto}</p>
          <a className="btn btn-primary btn-big" href={whatsappUrl} target="_blank" rel="noreferrer">
            {planosSection.ctaBotao}
          </a>
        </div>
      </div>
    </section>
  );
}
