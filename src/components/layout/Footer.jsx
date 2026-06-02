export default function Footer({ navLinks }) {
  return (
    <footer id="contato" className="footer">
      <div className="container footer-inner">
        <a href="#topo" className="brand small" aria-label="Voltar ao topo">
          MTH<span className="brand-dot">.</span>ARAUJO
        </a>

        <nav className="footer-nav" aria-label="Links do rodapé">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <p>© 2025 Matheus Araújo · Personal Trainer</p>
      </div>
    </footer>
  );
}
