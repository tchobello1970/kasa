
import '../../sass/CardContainer.scss';
import Card from '../../components/Card';
import { logements } from '../../data/logements';

/**
 * Component for rendering a container of cards displaying logements.
 * 
 * This component maps over an array of logements and renders a Card component for each logement.
 * 
 * @returns {JSX.Element} The CardContainer component.
 */

function CardContainer() {
  return (
      <div className='kasa-card-container'>
          {logements.map(logement => (
              <Card key={logement.id} logement={logement}/>
          ))}
      </div>
  );
}
  
export default CardContainer