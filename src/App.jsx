import "./styles/global.css";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import Hero from "./components/sections/Hero";
import Sobre from "./components/sections/Sobre";
import Evolucao from "./components/sections/Evolucao";
import Planos from "./components/sections/Planos";
import { navLinks } from "./data/siteData";

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Sobre />
        <Evolucao />
        <Planos />
      </main>
      <Footer navLinks={navLinks} />
      <WhatsAppButton />
    </>
  );
}
