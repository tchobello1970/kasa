
//import '../../styles/About.css'
import '../../sass/About.scss';
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import { values } from '../../data/valeurs'

function About() {

    return (
        <div>
            <Banner background={'mountains'}></Banner>
            <div className='kasa-values-container'>
                {values.map(({ title, content }) =>
                    (
                    <div key={title}>
                        <Collapse title={title} content={content} />
                    </div>
                )
                )}
            </div>
        </div>
    )

}
export default About;
