import { useState } from 'react'
import '../../styles/Collapse.css'
import vector from '../../assets/vector.png'


function Collapse({ title, content }) {
    const [isContentOpen, setIsContentOpen] = useState(false);

    const toggleContent = () => {
        setIsContentOpen(!isContentOpen);
    };

    return (
        <div>
            <div className='kasa-collapse-title-container'>
                <div className='kasa-collapse-title'>{title}</div>
                <div className='kasa-collapse-arrow-container' onClick={toggleContent}>
                    <img src={vector} alt="fleche" />
                </div>
            </div>
            <div id={`${title}-id`} className={`kasa-collapse-content ${isContentOpen ? 'open' : ''}`}>
                {content}
            </div>
        </div>
    );
}

export default Collapse;