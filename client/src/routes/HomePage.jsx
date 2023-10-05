import "../styles/HomePage.scss";
import PetList from "../components/PetList";
import TopNavBar from "../components/TopNavBar";
import PetModal from "./PetModal";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import { UseApplicationData } from "../hooks/UseApplicationData";
import SearchBar from "../components/SearchBar";
import React, { useState } from 'react';

function HomePage(props) {

  const {
    favorites,
    addToFavorites,
    isModalOpen,
    selectedImage,
    openModal,
    closeModal
  } = UseApplicationData();

  const [searchResults, setSearchResults] = useState([]);

  const onSearch = async (searchTerm) => {
    searchTerm = searchTerm.toLowerCase();
    try {
      console.log('onSearch called with searchTerm:', searchTerm);
      const REACT_APP_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJFOWQwUTZHTGVUdkFrYW5rZHREeGNLYlQxQWllTFFWVVJtY3lHVDJoUEo0QTYwNWU3TSIsImp0aSI6IjA0YmRhMGE0NDAyNzg1MjRlNTNmMDdhYThhZTA4YzJhNGEzYjIzYzdiNDdkODc4MzY0MTUxMjllNjg0MmM1ODgxN2ZlYWRjNTUyN2ZmMWQ4IiwiaWF0IjoxNjk2NTMxMzMzLCJuYmYiOjE2OTY1MzEzMzMsImV4cCI6MTY5NjUzNDkzMywic3ViIjoiIiwic2NvcGVzIjpbXX0.ellyUXqt9T-sxazV0QA0Va6WglMw9foilBAXp6YpAyasxRUpzal_oLc98djvomknZ3k6RiP1uuBBW36JX0_Nm1Sk9yX3gJtn0M4Q41QqOvdCZVTmpuwGssAuGLSufYlOUMuzph45nFmBn_7wfk3cwFqUwIuSU4DOPVsVs3iEF4t9KJt0HRkVfOX8htvpFmlD8NskWHJVEQhm3xo1iKT153G8Ge3_9AuqSwEqSJug3rknndArU42iTHXbGa2AG4dxlEVCYMb_BqK40n-0ogW8ZTtAJaYJDNrQwts6D0O6FCrRkGig_JarNSohCHp90OKpmkxx0VL4dYbsn86tWQr7Jg';
      const response = await fetch(`https://api.petfinder.com/v2/animals?type=${searchTerm}`, {
        headers: {
          Authorization: `Bearer ${REACT_APP_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      // Filter the pets to include only those with photos
      const petsWithPhotos = data.animals.filter((pet) => pet.photos.length > 0);
      // Assuming the pet search results are in the 'animals' property of the response
      setSearchResults(petsWithPhotos);
    } catch (error) {
      console.error('Error fetching search results:', error);
      // Handle error gracefully, e.g., display an error message to the user
    }
  };

  return (
    <div className="home-page">
      <TopNavBar favorites={favorites} />
      <div className="search-container">
        <h1>New Arrivals</h1>
        <SearchBar onSearch={onSearch} />
        {console.log('SearchBar rendered')} {/* Add this line */}
      </div>
      <PetList addToFavorites={addToFavorites} openModal={openModal} favorites={favorites} searchResults={searchResults} />
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

export default HomePage;