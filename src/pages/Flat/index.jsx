

import '../../styles/Flat.css'
import { useParams } from 'react-router-dom';
import { logements } from '../../data/logements';
import Error from '../Error';
import Carrousel from '../../components/Carrousel';
import Collapse from '../../components/Collapse';
import starGrey from '../../assets/star-grey.png'
import starPink from '../../assets/star-pink.png'

function Flat () {
  const { flatNumber } = useParams();
  const apparts = logements.filter(appart => appart.id === flatNumber);

  if (apparts.length === 0)
  {
    return <Error />
  }
  else
  {
    const appart = apparts[0];

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= appart.rating) {
        stars.push(<img key={i} src={starPink} alt="etoile" />);
      } else {
        stars.push(<img key={i} src={starGrey} alt="vide" />);
      }
    }

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
              <div className='kasa-flat-tags'>
                {appart.tags.map(tag => ( <div key={tag} className='tag'>{tag}</div>))}
              </div>
            </div>
            <div className='kasa-who-ratings'>
              <div className='kasa-who'>
                <h3>{appart.host.name}</h3>
                <img src={appart.host.picture} alt="owner"/>
              </div>
              <div className='kasa-ratings'>{stars}</div>
            </div>
          </div>
          <div className='kasa-desc'>
            <div className='kasa-collapse-container'>
                <Collapse title={'Description'} content={appart.description} />
            </div>
            <div className='kasa-collapse-container'>
                <Collapse title={'Équipements'} content={equipements} />
            </div>
          </div>
        </div>
     </div>
    )
  }
}

export default Flat;
