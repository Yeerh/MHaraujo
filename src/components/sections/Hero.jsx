import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fadeUp";
import { createWhatsAppUrl, heroStats, whatsappMessages } from "../../data/siteData";
import AnimatedStat from "../common/AnimatedStat";

const titleContainer = {
  hidden: {},
  visible: { transition: { delayChildren: 0.12, staggerChildren: 0.14 } },
};

const titleLine = {
  hidden: { opacity: 0, y: "110%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] } },
};

const mobileTitleItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero({ ready = true }) {
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

            <motion.div
              className="hero-mobile-heading"
              variants={titleContainer}
              initial="hidden"
              animate={ready ? "visible" : "hidden"}
            >
              <motion.h1 variants={mobileTitleItem}>Matheus Personal Trainer</motion.h1>
              <motion.p variants={mobileTitleItem}>Treinos personalizados para você evoluir com resultado, disciplina e segurança.</motion.p>
            </motion.div>

            <motion.h1 className="hero-headline" variants={titleContainer} initial="hidden" animate={ready ? "visible" : "hidden"}>
              <span className="hero-line-mask"><motion.span variants={titleLine}>EVOLUA SEU FÍSICO COM</motion.span></span>
              <span className="hero-line-mask"><motion.span className="neon" variants={titleLine}>TREINO, MÉTODO E ACOMPANHAMENTO</motion.span></span>
            </motion.h1>

            <p className="hero-subtitle">
              Especialista em hipertrofia e emagrecimento. Treinos personalizados com método, ciência e acompanhamento real para você
              evoluir com consistência.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href={createWhatsAppUrl(whatsappMessages.evolucao)} target="_blank" rel="noreferrer">
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
              <AnimatedStat item={item} active={ready} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
