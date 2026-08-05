import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.25 });

  if (reduceMotion) return null;

  return <motion.div className="scroll-progress" style={{ scaleX: smoothProgress }} aria-hidden="true" />;
}
