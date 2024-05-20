
//import '../../styles/CardContainer.css'
import '../../sass/CardContainer.scss';
import Card from '../../components/Card'
import { logements } from '../../data/logements'

function CardContainer() {

    return (
      <div className='kasa-card-container'>

        {logements.map(logement =>
                   (
                    <div key={logement.id}>
                      <Card logement={logement}/>
                    </div>
                  )
                )}
      </div>
    )
  }
  
export default CardContainer