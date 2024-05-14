import '../../styles/Header.css';
import logo from '../../assets/logo-header.png';
import { NavLink } from 'react-router-dom';



function Header() {
  return (
      <div className='kasa-header'>
        <img src={logo} alt='logo-Kasa' className='logo-header' />
        <nav>
          <NavLink to="/" >Accueil</NavLink>
          <NavLink to="/about" >A propos</NavLink>
        </nav>
      </div>
  )
}

export default Header

