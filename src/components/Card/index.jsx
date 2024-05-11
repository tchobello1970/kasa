import '../../styles/Card.css'
import { Link } from 'react-router-dom';

function Card({cover,title,id}) {

    return (
      <div className='kasa-card'>
        <Link to={`/gallery/${id}`}>
            <img src={cover} alt={`${title} cover`} />
            </Link>
        <h3>{title}</h3>
      </div>
    )
  }
  
  export default Card