import '../../styles/Footer.css'
import logo from '../../assets/logo-footer.png'

function Footer() {
  return (
    <footer className='kasa-footer'>

      <img src={logo} alt='logo-Kasa' className='logo-footer' />
				
      <div className='text-footer'> © 2020 Kasa. All rights reserved</div>
    </footer>
  )
}

export default Footer




