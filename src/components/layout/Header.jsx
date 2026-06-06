import { useEffect, useState } from "react";
import { whatsappUrl } from "../../data/siteData";

export default function Header({ navLinks }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : previousOverflow;
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-shell">
        <a href="#topo" className="brand" aria-label="Ir para o topo">
          <img src="/images/hero-logo-matheus.png" alt="Logo MA" className="brand-logo" />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn desktop-cta header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          QUERO COMEÇAR
        </a>

        <button
          className="hamburger"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <>
          <button className="mobile-menu-backdrop" type="button" aria-label="Fechar menu" onClick={() => setMenuOpen(false)} />

          <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu mobile">
            <div className="mobile-menu-header">
              <img src="/images/hero-logo-matheus.png" alt="Logo MA" className="mobile-menu-logo" />
              <button className="mobile-menu-close" type="button" aria-label="Fechar menu" onClick={() => setMenuOpen(false)}>
                <span />
                <span />
              </button>
            </div>

            <nav className="mobile-menu-nav" aria-label="Navegação mobile">
              {navLinks.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>

            <a className="btn btn-primary mobile-menu-cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
              QUERO COMEÇAR
            </a>
          </div>
        </>
      )}
    </header>
  );
}
