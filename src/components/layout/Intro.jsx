import { motion, useReducedMotion } from "framer-motion";

export default function Intro({ onComplete }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="intro"
      role="status"
      aria-label="Carregando o site de Matheus Araújo"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: "easeInOut" }}
    >
      <div className="intro-glow" aria-hidden="true" />
      <motion.img
        src="/images/hero-logo-matheus.png"
        alt="Matheus Araújo Personal Trainer"
        className="intro-logo"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.78, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span
        className="intro-line"
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: reduceMotion ? 0.01 : 0.9, delay: 0.25, ease: "easeInOut" }}
        onAnimationComplete={onComplete}
      />
      <span className="sr-only">Site carregado</span>
    </motion.div>
  );
}
