import '../../sass/Collapse.scss';
import vector from '../../assets/vector.png';
import { useState } from 'react';

/**
 * Collapse component that renders a collapsible section with a title and content.
 *
 * @param {Object} props - The props object.
 * @param {string} props.title - The title of the collapsible section.
 * @param {string} props.content - The content of the collapsible section.
 * @returns {JSX.Element} The rendered Collapse component.
 */

function Collapse({ title, content }) {
    const [isContentOpen, setIsContentOpen] = useState(false);

    const toggleContent = () => {
        setIsContentOpen(!isContentOpen);
    };

    return (
        <div>
            <div className='title__container' onClick={toggleContent}>
                <span>{title}</span>
                <div className={`arrow__container ${isContentOpen ? 'open' : ''}`} >
                    <img src={vector} alt="fleche" />
                </div>
            </div>
            <div className={`content ${isContentOpen ? 'open' : ''}`}>{content}</div>
        </div>
    );
}

export default Collapse;