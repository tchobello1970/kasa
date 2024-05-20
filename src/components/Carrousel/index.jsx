import '../../sass/Carrousel.scss';
import arrow_left from '../../assets/arrow_left.png';
import arrow_right from '../../assets/arrow_right.png';
import { useState, useRef, useEffect } from 'react';

const Carrousel = ({ pictures }) => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const carrouselInnerRef = useRef(null);

    const picturesExtended = [pictures[pictures.length - 1], ...pictures, pictures[0]];

    const handlePrev = () => setActiveIndex(prevIndex => prevIndex - 1);
    const handleNext = () => setActiveIndex(prevIndex => prevIndex + 1);

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
        <div className="kasa-carrousel">
            <div
                className={`kasa-carrousel-inner ${transitionEnabled ? 'transition' : ''}`}
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                ref={carrouselInnerRef}
                onTransitionEnd={() => {
                    if (activeIndex === 0 || activeIndex === pictures.length + 1) {
                        setTransitionEnabled(false);
                        setActiveIndex(activeIndex === 0 ? pictures.length : 1);
                    }
                }}
            >
                {picturesExtended.map((picture, index) => (
                    <div key={index} className="kasa-carrousel-item">
                        <img src={picture} alt={`Appartement ${index + 1}`} />
                    </div>
                ))}
            </div>
            {pictures.length > 1 && (
                <div className="kasa-carrousel-dynamics">
                    <div className="kasa-carrousel-arrow-left-container" onClick={handlePrev}>
                        <img src={arrow_left} alt="Flèche gauche" />
                    </div>
                    <span className='kasa-carrousel-count'>{displayedIndex}/{pictures.length}</span>
                    <div className="kasa-carrousel-arrow-right-container" onClick={handleNext}>
                        <img src={arrow_right} alt="Flèche droite" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carrousel;