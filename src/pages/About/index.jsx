
import '../../sass/About.scss';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import { values } from '../../data/valeurs';

/**
 * The About component renders the about page of the application.
 * It includes a banner and a series of collapsible sections displaying values.
 *
 * @returns {JSX.Element} The rendered about page component.
 */

function About() {
    return (
        <div>
            <Banner background={'mountains'}></Banner>
            <div className='kasa-values-container'>
                {values.map(({ title, content }) =>
                    (
                        <Collapse key={title} title={title} content={content} />
                    )
                )}
            </div>
        </div>
    )
}
export default About;