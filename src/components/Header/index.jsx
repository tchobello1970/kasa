//import '../../styles/Header.css';
import '../../sass/Header.scss';
import logo from '../../assets/logo-header.png';
import { NavLink } from 'react-router-dom';
/* thanks to NavLink link is underlined when page is active */

function Header() {
  return (
      <div className='kasa-header'>
        <img src={logo} alt='logo-Kasa' />
        <nav>
          <NavLink to="/" >Accueil</NavLink>
          <NavLink to="/about" >A propos</NavLink>
        </nav>
      </div>
  )
}

export default Header