import "../styles/Home.scss";
import PetList from "./PetList";
import PetModal from "../routes/PetModal";
import Articles from "./Articles";
import SearchBar from "./SearchBar";

function Home({ addToFavorites, openModal, favorites, closeModal, selectedImage, isModalOpen, pets, searchPets, loading }) {

  return (
    <div className="home-page">
      <div className="banner"/>
      <p className="welcome">Welcome to our pet adoption shelter, where hearts are united with the paws that need them most. We're overjoyed to have you here, embarking on a journey filled with love, companionship, and wagging tails. At our shelter, we believe in the extraordinary power of rescue and the unbreakable bond between humans and their four-legged friends. Whether you're seeking the spirited energy of a playful pup, the comforting purrs of a feline friend, or the gentle wisdom of a senior companion, we're here to help you find your perfect furry match. Our shelter is more than a place for pets; it's a place for second chances, new beginnings, and countless heartwarming stories. Together, let's make the world a brighter and more compassionate place, one adoption at a time. Welcome to our family; welcome to a world of unconditional love.</p>
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