
import '../../styles/CardContainer.css'
import Card from '../../components/Card'
import { logements } from '../../data/logements'

function CardContainer() {

    return (
      <div className='kasa-card-container'>

        {logements.map(({ id, cover, title }) =>
                   (
                    <div key={id}>
                      <Card cover={cover} title={title} id={id}/>
                    </div>
                  )
                )}
      </div>
    )
  }
  
  export default CardContainer