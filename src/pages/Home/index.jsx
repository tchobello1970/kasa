
import Banner from '../../components/Banner';
import CardContainer from '../../components/CardContainer';

/**
 * Home component renders the home page of the application.
 * It includes a banner with a specific background and a container for cards.
 *
 * @returns {JSX.Element} The Home component.
 */

function Home() {
    return (
      <div>
        <Banner background={'shore'}></Banner>
        <CardContainer> </CardContainer>
      </div>
    )
}

export default Home;
