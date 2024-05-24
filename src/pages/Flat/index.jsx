

import '../../sass/Flat.scss';
import { useParams } from 'react-router-dom';
import { logements } from '../../data/logements';
import Error from '../Error';
import Carrousel from '../../components/Carrousel';
import Tags from '../../components/Tags';
import Rating from '../../components/Rating'; 
import Collapse from '../../components/Collapse';


function Flat () {
  const { flatNumber } = useParams();
  const apparts = logements.filter(appart => appart.id === flatNumber);

  if (apparts.length === 0)  {
    return <Error />
  }
  else  {
    const appart = apparts[0];

    const equipements = appart.equipments.map((equipment, index) => (
      <li key={index}>{equipment}</li>
    ))

    return (
    <div>
      <div className='kasa-flat'>
          < Carrousel pictures={appart.pictures}/>
          <div className='kasa-flat-infos'>
            <div className='kasa-flat-where-tags'>
              <h2>{appart.title}</h2>
              <p>{appart.location}</p>
              < Tags tags={appart.tags} />
            </div>
            <div className='kasa-who-ratings'>
              <div className='kasa-who'>
                <h3>{appart.host.name}</h3>
                <img src={appart.host.picture} alt="owner"/>
              </div>
              < Rating rating={appart.rating} />
              </div>
          </div>
          <div className='kasa-desc'>
              <Collapse title={'Description'} content={appart.description} />
              <Collapse title={'Équipements'} content={equipements} />
          </div>
        </div>
     </div>
    )
  }
}

export default Flat;
