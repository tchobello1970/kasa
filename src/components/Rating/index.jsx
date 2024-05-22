import '../../sass/Rating.scss';
import starGrey from '../../assets/star-grey.png';
import starPink from '../../assets/star-pink.png';

/**
 * Rating Component
 * Renders a 5-star rating system with pink stars for filled and grey stars for empty.
 *
 * @param {Object} props - The props object.
 * @param {number} props.rating - The rating value (between 1 and 5).
 * @returns {JSX.Element} The rendered rating component.
 */

function Rating({ rating }) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<img key={i} src={starPink} alt="etoile" />);
        } else {
            stars.push(<img key={i} src={starGrey} alt="vide" />);
        }
    }

    return (
        <div className='rating'>{stars}</div>
    );
}
  
export default Rating;