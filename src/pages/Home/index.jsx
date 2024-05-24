
import Banner from '../../components/Banner';
import CardContainer from '../../components/CardContainer';
import { logements } from '../../data/logements';

/**
 * Home component renders the home page of the application.
 * It includes a banner with a specific background and a container for cards.
 *
 * @returns {JSX.Element} The Home component.
 */

function Home() {
    return (
      <div>
        <Banner background={'shore'} />
        <CardContainer cards={logements}/>
      </div>
    )
}

export default Home;
