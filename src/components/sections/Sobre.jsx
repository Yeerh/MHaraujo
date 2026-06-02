import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fadeUp";
import { diferenciais } from "../../data/siteData";
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
            <div className="sobre-tag">+800 ALUNOS ATENDIDOS</div>
          </motion.div>

          <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="eyebrow">QUEM SOU</p>
            <h2 className="section-title">
              <span>MAIS DE 5 ANOS</span>
              <span>TRANSFORMANDO</span>
              <span className="neon">CORPOS, ROTINAS E VIDAS</span>
            </h2>
            <p className="section-text">
              Sou Matheus Araújo, personal trainer com mais de 5 anos de experiência e +800 alunos atendidos. Especialista em
              hipertrofia e emagrecimento, ajudo pessoas em Recife e online a evoluírem com método, acompanhamento e resultado real.
            </p>

            <ul className="check-list">
              {diferenciais.map((item) => (
                <li key={item}>
                  <span className="dot" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a className="btn btn-primary sobre-cta" href="https://wa.me/5581999999999" target="_blank" rel="noreferrer">
              COMEÇAR MINHA EVOLUÇÃO
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
