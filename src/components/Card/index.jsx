import '../../sass/Card.scss';
import { Link } from 'react-router-dom';

/**
 * Component for rendering a card representing a property.
 * Displays the property's image and title, with a link to view details.
 *
 * @param {Object} logement - The property object containing id, title, and cover image.
 * @returns {JSX.Element} The card component.
 */

function Card({logement}) {
    return (
      <Link to={`/flat/${logement.id}`} className="kasa-card">
        <img src={logement.cover} alt={`${logement.title} cover`} />
        <h3>{logement.title}</h3>
    </Link>
    )
  }
  
  export default Card