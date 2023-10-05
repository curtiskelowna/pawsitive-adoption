import "../styles/HomePage.scss";
import PetList from "../components/PetList";
import PetModal from "../routes/PetModal";
import Articles from "../components/Articles";
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
    </div>

  );
}


export default Home;