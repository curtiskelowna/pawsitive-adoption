import "../styles/HomePage.scss";
import PetList from "./PetList";
import PetModal from "../routes/PetModal";
import Articles from "./Articles";
import SearchBar from "./SearchBar";

function Home({ addToFavorites, openModal, favorites, closeModal, selectedImage, isModalOpen, pets, searchPets, loading }) {

  return (
    <div className="home-page">
      <div className="search-container">
        <h1>New Arrivals</h1>
        <SearchBar onSearch={searchPets} />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PetList addToFavorites={addToFavorites} openModal={openModal} favorites={favorites} pets={pets} />)}
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