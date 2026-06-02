import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fadeUp";
import { planos } from "../../data/siteData";

export default function Planos() {
  return (
    <section id="planos" className="section">
      <div className="container panel panel-dark">
        <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="center-head">
          <p className="eyebrow">O QUE OFEREÇO</p>
          <h2 className="section-title center">MEUS PLANOS</h2>
          <p className="section-text center">Escolha o acompanhamento ideal para sua rotina, objetivo e nível de evolução.</p>
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
              <div className="plan-number">{plano.numero}</div>
              <div className="plan-content">
                <span className="popular-badge">{plano.selo}</span>
                <h3>{plano.titulo}</h3>
                <strong>{plano.frase}</strong>
                <p>{plano.descricao}</p>
                <div className="plan-options">{plano.opcoes}</div>
                <div className="plan-price">{plano.valor}</div>
                <ul className="plan-benefits">
                  {plano.beneficios.map((beneficio) => (
                    <li key={beneficio}>
                      <span className="dot" />
                      <span>{beneficio}</span>
                    </li>
                  ))}
                </ul>
                <a className="btn plan-button" href="https://wa.me/5581999999999" target="_blank" rel="noreferrer">
                  {plano.botao}
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="plans-cta">
          <p>Vagas limitadas por mês. Garanta sua avaliação agora.</p>
          <a className="btn btn-primary btn-big" href="https://wa.me/5581999999999" target="_blank" rel="noreferrer">
            GARANTIR MINHA VAGA
          </a>
        </div>
      </div>
    </section>
  );
}
