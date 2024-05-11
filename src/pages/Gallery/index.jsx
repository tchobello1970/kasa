
import { useParams } from 'react-router-dom';

function Gallery () {
  const { flatNumber } = useParams();
  // Maintenant, flatNumber contient la valeur dynamique de l'URL
  return <div>Gallery for flat number: {flatNumber}</div>;
};

export default Gallery;
