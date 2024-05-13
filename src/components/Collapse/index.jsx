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
            <div className='kasa-collapse-title-container' onClick={toggleContent}>
                <div className='kasa-collapse-title'>{title}</div>
                <div className={`kasa-collapse-arrow-container ${isContentOpen ? 'open':'close'}`}
                        >
                    <img src={vector} alt="fleche" />
                </div>
            </div>
            {isContentOpen && <div id={`${title}-id`} className='kasa-collapse-content'>{content}</div>}
        </div>
    );
}

export default Collapse;