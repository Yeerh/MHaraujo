import { useEffect, useRef, useState } from "react";

export default function Header({ navLinks }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    const onOutsideClick = (event) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target)) setMenuOpen(false);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousedown", onOutsideClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousedown", onOutsideClick);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-shell" ref={menuRef}>
        <a href="#topo" className="brand" aria-label="Ir para o topo">
          <img src="/images/logo-ma.png" alt="Logo MA" className="brand-logo" />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn desktop-cta header-cta" href="https://wa.me/5581999999999" target="_blank" rel="noreferrer">
          QUERO COMEÇAR
        </a>

        <button
          className="hamburger"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="btn btn-primary" href="https://wa.me/5581999999999" target="_blank" rel="noreferrer">
            QUERO COMEÇAR
          </a>
        </div>
      )}
    </header>
  );
}
