
import '../../styles/Banner.css'
import shore from '../../assets/shore.webp'
import mountains from '../../assets/mountains.webp'

function Banner({background}) {

    return (
      <div className='kasa-banner'>
        <img src= {background==='shore'? shore: mountains} alt={background}>
        </img>
      </div>
    )
  }
  
  export default Banner