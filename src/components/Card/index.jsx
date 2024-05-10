import '../../styles/Card.css'

function Card({cover,title}) {

    return (
      <div className='kasa-card'>
        <img src={cover} alt={`${title} cover`} />
        <h3>{title}</h3>
      </div>
    )
  }
  
  export default Card