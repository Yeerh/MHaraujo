import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fadeUp";
import { resultados, whatsappUrl } from "../../data/siteData";
import ImageWithFallback from "../common/ImageWithFallback";

export default function Evolucao() {
  return (
    <section id="evolucao" className="section evolucao-section">
      <div className="container panel panel-gradient">
        <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="center-head">
          <p className="eyebrow">PROVAS REAIS</p>
          <h2 className="section-title center">RESULTADOS REAIS DO #TEAMMA</h2>
          <p className="section-text center">Transformações construídas com método, consistência e acompanhamento real.</p>
        </motion.div>

        <div className="result-grid">
          {resultados.map((item, index) => (
            <motion.article
              key={item.nome}
              className="result-card"
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="result-image-wrap">
                <div className="result-image-pair">
                  <div className="result-frame">
                    <ImageWithFallback
                      src={item.antes}
                      alt={`Antes de ${item.nome}`}
                      className="result-image"
                      placeholderText="Antes"
                      showIcon={false}
                    />
                    <span className="result-image-label">Antes</span>
                  </div>
                  <div className="result-frame">
                    <ImageWithFallback
                      src={item.depois}
                      alt={`Depois de ${item.nome}`}
                      className="result-image"
                      placeholderText="Depois"
                      showIcon={false}
                    />
                    <span className="result-image-label">Depois</span>
                  </div>
                </div>
                <span className="result-tag">{item.categoria}</span>
              </div>
              <div className="result-info">
                <h3>{item.nome}</h3>
                <strong>{item.resultado}</strong>
                <p>{item.descricao}</p>
                <span>{item.formato}</span>
                <small>{item.prova}</small>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="results-cta">
          <p>Pronto para construir sua evolução?</p>
          <a className="btn btn-primary btn-big" href={whatsappUrl} target="_blank" rel="noreferrer">
            COMEÇAR MINHA EVOLUÇÃO
          </a>
          <small>Resultados individuais podem variar conforme rotina, constância e acompanhamento.</small>
        </motion.div>
      </div>
    </section>
  );
}
