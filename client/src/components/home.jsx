import "../styles/HomePage.scss";
import PetList from "../components/PetList";
import TopNavBar from "../components/TopNavBar";
import PetModal from "../routes/PetModal";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import { UseApplicationData } from "../hooks/UseApplicationData";

function Home() {

  const {
    favorites,
    addToFavorites,
    isModalOpen,
    selectedImage,
    openModal,
    closeModal
  } = UseApplicationData();

  return (
    <div className="home-page">
      <TopNavBar favorites={favorites} />
      <div className="search-container">
        <h1>New Arrivals</h1>
        <h1>Search bar</h1>
      </div>
      <PetList addToFavorites={addToFavorites} openModal={openModal} favorites={favorites} />
      {isModalOpen && (
        <PetModal
          closeModal={closeModal}
          selectedImage={selectedImage}
          addToFavorites={addToFavorites}
          favorites={favorites}
        />
      )}
      <div>
        <Articles />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>

  );
}


export default Home;