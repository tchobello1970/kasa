import '../../sass/Footer.scss';
import logo from '../../assets/logo-footer.png';

/**
 * Component for the footer section of the application.
 * Renders a footer element with a logo and copyright text.
 *
 * @returns {JSX.Element} The footer component.
 */

function Footer() {
  return (
    <footer>
      <img src={logo} alt='logo-Kasa' />
      <p> © 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer




