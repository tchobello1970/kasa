import '../../styles/Header.css'
import logo from '../../assets/logo-header.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    padding: 15px;
    font-size: 24px;
    font-weight: 500;
    text-decoration:none;
    align: right;
    color: black;
    width:136px;
`

function Header() {
  return (
    <div className='kasa-header'>
      <img src={logo} alt='logo-Kasa' className='logo-header' />
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
      </nav>
    </div>
  )
}

export default Header

