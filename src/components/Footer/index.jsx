//import '../../styles/Footer.css'
import '../../sass/Footer.scss';
import logo from '../../assets/logo-footer.png'

function Footer() {
  return (
    <footer className='kasa-footer'>
      <img src={logo} alt='logo-Kasa' />
      <div> © 2020 Kasa. All rights reserved</div>
    </footer>
  )
}

export default Footer




