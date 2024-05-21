import '../../sass/Error.scss';
import { Link } from 'react-router-dom';

/**
 * Component for the error page of the application.
 * Renders a error message with a status code, a message, and a link to the home page.
 *
 * @returns {JSX.Element} The error component.
 */

function Error() {
    return (
      <div className='kasa-error'>
        <span >404</span>
        <h2>Oups ! La page que vous demandez n'existe pas.</h2>
        <Link to="/" className="link">Retourner sur la page d'accueil</Link>
      </div>
    )
  }
  
  export default Error