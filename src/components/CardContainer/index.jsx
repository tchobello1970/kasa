
import '../../sass/CardContainer.scss';
import Card from '../../components/Card';

/**
 * Component for rendering a container of cards displaying logements.
 * 
 * This component maps over an array of logements and renders a Card component for each logement.
 * 
 * @returns {JSX.Element} The CardContainer component.
 */

function CardContainer({cards}) {
  return (
      <div className='card-container'>
          {cards.map(card => (
              <Card key={card.id} logement={card}/>
          ))}
      </div>
  );
}
  
export default CardContainer