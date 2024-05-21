import '../../sass/Header.scss';
import logo from '../../assets/logo-header.png';
import { NavLink } from 'react-router-dom';
/* thanks to NavLink link is underlined when page is active */

/**
 * Component for the header section of the application.
 * Renders a header element with a logo and navigation links.
 *
 * @returns {JSX.Element} The header component.
 */

function Header() {
  return (
      <header>
        <img src={logo} alt='logo-Kasa' />
        <nav>
          <NavLink to="/" >Accueil</NavLink>
          <NavLink to="/about" >A propos</NavLink>
        </nav>
      </header>
  )
}

export default Header