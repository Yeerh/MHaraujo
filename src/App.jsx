import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import "./styles/global.css";
import Intro from "./components/layout/Intro";
import LogoCursor from "./components/layout/LogoCursor";
import ScrollProgress from "./components/layout/ScrollProgress";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import Hero from "./components/sections/Hero";
import Sobre from "./components/sections/Sobre";
import Apresentacao from "./components/sections/Apresentacao";
import Evolucao from "./components/sections/Evolucao";
import Planos from "./components/sections/Planos";
import { navLinks } from "./data/siteData";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const fallbackTimer = window.setTimeout(() => setShowIntro(false), 1800);
    return () => window.clearTimeout(fallbackTimer);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{showIntro && <Intro onComplete={() => window.setTimeout(() => setShowIntro(false), 350)} />}</AnimatePresence>
      <LogoCursor />
      <ScrollProgress />
      <motion.div className="site-shell" initial={{ opacity: 0 }} animate={{ opacity: showIntro ? 0 : 1 }} transition={{ duration: 0.55 }}>
        <Header navLinks={navLinks} />
        <main>
          <Hero ready={!showIntro} />
          <Sobre />
          <Apresentacao />
          <Evolucao />
          <Planos />
        </main>
        <Footer navLinks={navLinks} />
        <WhatsAppButton />
      </motion.div>
    </MotionConfig>
  );
}
