import logo from '../../assets/images/logo-kasa.png'

function Header() {
    return (
      <header className="header">
        <div className="header__container">
          <img
            src={logo}
            alt="Kasa"
            className="header__logo"
          />
  
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <a href="/" className="header__link">
                  Accueil
                </a>
              </li>
              <li className="header__item">
                <a href="/about" className="header__link">
                  À propos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
  
  export default Header
  