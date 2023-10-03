import "../styles/HomePage.scss"
import PetList from "../components/PetList";
import TopNavBar from "../components/TopNavBar";
import Articles from "../components/Articles";

function HomePage() {

  return (
    <div className="home-route">
      <TopNavBar/>
      <h1>New Arrivals</h1>
      <PetList />
      <div>
        <Articles />
      </div>
    </div>
  );
}

export default HomePage;