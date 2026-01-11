import logo from '../../assets/images/logo-kasa-white.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img 
          src={logo}
          alt="Kasa"
          className="footer__logo"        
        />
        <p className="footer__text">© 2026 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
