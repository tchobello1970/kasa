import '../../styles/Card.css'
import { Link } from 'react-router-dom';

function Card({logement}) {

    return (
      <div className='kasa-card'>
        <Link to={`/flat/${logement.id}`}>
            <img src={logement.cover} alt={`${logement.title} cover`} />
            </Link>
        <h3>{logement.title}</h3>
      </div>
    )
  }
  
  export default Card