import '../../sass/Carrousel.scss';
import arrow_left from '../../assets/arrow_left.png';
import arrow_right from '../../assets/arrow_right.png';
import { useState, useEffect } from 'react';

const Carrousel = ({ pictures }) => {
    
    const picturesExtended = [pictures[pictures.length - 1], ...pictures, pictures[0]];
    
    const [activeIndex, setActiveIndex] = useState(1);
    const handlePrev = () => setActiveIndex(prevIndex => prevIndex - 1);
    const handleNext = () => setActiveIndex(prevIndex => prevIndex + 1);

    const [transitionEnabled, setTransitionEnabled] = useState(true);

    



    useEffect(() => {
        const lastIndex = pictures.length;
        const transitionDuration = 500;

        if (activeIndex === 0 || activeIndex === lastIndex + 1) {
            setTimeout(() => {
                setTransitionEnabled(false);
                setActiveIndex(activeIndex === 0 ? lastIndex : 1);
            }, transitionDuration);
        }
    }, [activeIndex, pictures.length]);

    useEffect(() => {
        if (!transitionEnabled) {
            const timer = setTimeout(() => {
                setTransitionEnabled(true);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [transitionEnabled]);

    const displayedIndex = activeIndex === 0 ? pictures.length : activeIndex === pictures.length + 1 ? 1 : activeIndex;

    return (
        <div className="carrousel">
            <div
                className={`carrousel__inner ${transitionEnabled ? 'transition' : ''}`}
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                onTransitionEnd={() => {
                    if (activeIndex === 0 || activeIndex === pictures.length + 1) {
                        setTransitionEnabled(false);
                        setActiveIndex(activeIndex === 0 ? pictures.length : 1);
                    }
                }}
            >
                {picturesExtended.map((picture, index) => (
                    <div key={index} className="carrousel__item">
                        <img src={picture} alt={`Appartement ${index + 1}`} />
                    </div>
                ))}
            </div>
            {pictures.length > 1 && (
                <div className="carrousel__controls">
                    <div className="carrousel__arrow carrousel__arrow --left" onClick={handlePrev}>
                        <img src={arrow_left} alt="Flèche gauche" />
                    </div>
                    <span className='carrousel__counter'>{displayedIndex}/{pictures.length}</span>
                    <div className="carrousel__arrow carrousel__arrow --right" onClick={handleNext}>
                        <img src={arrow_right} alt="Flèche droite" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carrousel;