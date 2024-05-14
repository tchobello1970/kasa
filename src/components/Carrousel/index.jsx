import '../../styles/Carrousel.css';
import arrow_left from '../../assets/arrow_left.png';
import arrow_right from '../../assets/arrow_right.png';
import { useState } from 'react';

function Carrousel({ pictures }) {

    const [activePicture, setActivePicture] = useState(0);

    const handleLeftArrowClick = () => {
        setActivePicture( activePicture === 0 ? pictures.length-1 : activePicture-1 );
    };
    
    const handleRightArrowClick = () => {
        setActivePicture( activePicture === pictures.length-1 ? 0 : activePicture+1 );
    };
   
    return (
        <div className='kasa-carrousel'>
            <img src={pictures[activePicture]} alt={'appartement '+activePicture+1} />
            { pictures.length > 1 && (
                <div className='kasa-carrousel-dynamics'>
                    <div className='kasa-carrousel-arrow-left-container' onClick={handleLeftArrowClick}>
                        <img src={arrow_left} alt='' />
                    </div>
                    <span className='kasa-carrousel-count'>{activePicture+1}/{pictures.length}</span>
                    <div className='kasa-carrousel-arrow-right-container' onClick={handleRightArrowClick}>
                        <img src={arrow_right} alt='' />
                    </div>
                </div>
            ) }
        </div>
    );
}

export default Carrousel;