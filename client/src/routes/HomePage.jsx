import PetList from "../components/PetList";
import TopNavBar from "../components/TopNavBar";


function HomePage() {

  return (
    <div className="App">
      <TopNavBar/>
      <h1>My Pet App</h1>
      <PetList />
    </div>
  );
}

export default HomePage;