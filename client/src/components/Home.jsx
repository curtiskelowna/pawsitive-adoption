import "../styles/Home.scss";
import PetList from "./PetList";
import PetModal from "../routes/PetModal";
import Articles from "./Articles";
import SearchBar from "./SearchBar";

function Home({ addToFavorites, openModal, favorites, closeModal, selectedImage, isModalOpen, pets, searchPets, loading }) {

  return (
    <div className="home-page">
      <section className="banner-container">
      <div className="banner"></div>
      </section>
      <p className="welcome">Welcome to our pet adoption shelter, where hearts are united with the paws that need them most. We're overjoyed to have you here, embarking on a journey filled with love, companionship, and wagging tails.  Welcome to our family; welcome to a world of unconditional love.</p>
      <div className="search-container">
        <h1>New Furry Arrivals</h1>
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