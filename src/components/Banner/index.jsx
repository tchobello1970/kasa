
import '../../styles/Banner.css'
import shore from '../../assets/shore.webp'
import mountains from '../../assets/mountains.webp'

function Banner({background}) {

    return (
      <div className='kasa-banner'>
        <img src={background==='shore'?shore:mountains} alt={background} className={background==='shore'?'darken':''}>
        </img>
        <p>{background==='shore'  ? 'Chez vous, partout et ailleurs' : ''}</p>
      </div>
    )
  }
  
  export default Banner