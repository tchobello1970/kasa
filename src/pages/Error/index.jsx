import '../../styles/Error.css'
import { Link } from 'react-router-dom';

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