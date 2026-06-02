import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fadeUp";
import { heroStats } from "../../data/siteData";

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero-ambient" />
      <div className="container hero-shell">
        <div className="hero-grid">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="hero-copy">
            <img src="/images/hero-logo-matheus.png" alt="Logotipo MA" className="hero-title-logo" />

            <div className="hero-brand-copy">
              <strong>Matheus Araújo</strong>
              <span>Personal Trainer</span>
            </div>

            <div className="hero-mobile-heading">
              <h1>Matheus Personal Trainer</h1>
              <p>Treinos personalizados para você evoluir com resultado, disciplina e segurança.</p>
            </div>

            <h1 className="hero-headline">
              <span>EVOLUA SEU FÍSICO COM</span>
              <span className="neon">TREINO, MÉTODO E ACOMPANHAMENTO</span>
            </h1>

            <p className="hero-subtitle">
              Especialista em hipertrofia e emagrecimento. Treinos personalizados com método, ciência e acompanhamento real para você
              evoluir com consistência.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="https://wa.me/5581999999999" target="_blank" rel="noreferrer">
                COMEÇAR MINHA EVOLUÇÃO
              </a>
              <a className="btn btn-dark" href="#planos">
                VER PLANOS
              </a>
            </div>
          </motion.div>
        </div>

        <div className="stats-strip">
          {heroStats.map((item, index) => (
            <motion.div key={item.label} className="stat-chip" custom={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
