import { NavLink } from 'react-router-dom'
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'header__link header__link--active' : 'header__link'
                }
              >
                Accueil
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'header__link header__link--active' : 'header__link'
                }
              >
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
