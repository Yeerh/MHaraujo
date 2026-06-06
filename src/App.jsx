import "./styles/global.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import Hero from "./components/sections/Hero";
import Sobre from "./components/sections/Sobre";
import Evolucao from "./components/sections/Evolucao";
import Planos from "./components/sections/Planos";
import { navLinks } from "./data/siteData";

export default function App() {
  return (
    <>
      <Header navLinks={navLinks} />
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
