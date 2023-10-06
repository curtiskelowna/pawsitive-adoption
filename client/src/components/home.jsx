import "../styles/HomePage.scss";
import PetList from "../components/PetList";
import PetModal from "../routes/PetModal";
import Articles from "../components/Articles";


function Home({addToFavorites, openModal, favorites, closeModal, selectedImage, isModalOpen, pets}) {

  return (
    <div className="home-page">
      <div className="search-container">
        <h1>New Arrivals</h1>

      </div>
      <PetList addToFavorites={addToFavorites} openModal={openModal} favorites={favorites} pets={pets} />
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