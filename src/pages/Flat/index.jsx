

import '../../styles/Flat.css'
import { useParams } from 'react-router-dom';
import { logements } from '../../data/logements';
import Error from '../Error';
import Carrousel from '../../components/Carrousel';
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


    return (
    <div>
      <div className='kasa-flat'>
          < Carrousel />
          <div className='kasa-flat-coords'>
            <div className='kasa-flat-where'>
              <h2>{appart.title}</h2>
              <p>{appart.location}</p>
            </div>
            <div className='kasa-flat-who'>
              <h3>{appart.host.name}</h3>
              <img src={appart.host.picture} alt="owner"/>
            </div>
          </div>
          <div className='kasa-flat-tags-ratings'>
            <div className='kasa-flat-tags'>
              {appart.tags.map(tag => ( <div key={tag} className='tag'>{tag}</div>))}
            </div>
            <div className='kasa-flat-ratings'>{stars}</div>

          </div>
        </div>
     </div>
    )
  }
}

export default Flat;
