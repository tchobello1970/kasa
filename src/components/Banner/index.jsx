import '../../sass/Banner.scss';
import shore from '../../assets/shore.webp';
import mountains from '../../assets/mountains.webp';

/**
 * Banner component renders a banner with a background image and optional text.
 * The background image and text vary based on the `background` prop.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.background - The background type, either 'shore' or another value for mountains.
 * @returns {JSX.Element} The Banner component.
 */

function Banner({ background }) {
  return (
    <div className='kasa-banner'>
      <img 
        src={background === 'shore' ? shore : mountains} 
        alt={background} 
        className={background === 'shore' ? 'darken60' : 'darken30'}
        loading="lazy" // Defer image loading
      />
      <p>{background === 'shore' ? 'Chez vous, partout et ailleurs' : ''}</p>
    </div>
  );
}

export default Banner;
