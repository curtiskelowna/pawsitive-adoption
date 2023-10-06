import "../styles/HomePage.scss";
import PetList from "../components/PetList";
import TopNavBar from "../components/TopNavBar";
import PetModal from "./PetModal";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import { UseApplicationData } from "../hooks/UseApplicationData";
import SearchBar from "../components/SearchBar";
import React, { useState, useEffect } from 'react';
import axios from "axios";

function HomePage() {

  const {
    favorites,
    addToFavorites,
    isModalOpen,
    selectedImage,
    openModal,
    closeModal
  } = UseApplicationData();

  const [loading, setLoading] = useState(false);
  const [pets, setPets] = useState([]);

  // Function to handle the search
  const handleSearchPets = async (searchTerm) => {
    try {
      setLoading(true);
      const apiResponse = await axios.get(`http://localhost:8080/pets?q=${searchTerm}`);
      const petsWithPhotos = apiResponse.data.animals.filter((pet) => pet.photos.length > 0);
      setPets(petsWithPhotos);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:8080/pets');
        console.log(response);
        setPets(response.data.animals);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };
    fetchPets();
  }, []);

  return (
    <div className="home-page">
      <TopNavBar favorites={favorites} />
      <div className="search-container">
        <h1>New Arrivals</h1>
        <SearchBar onSearch={handleSearchPets} />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PetList addToFavorites={addToFavorites} openModal={openModal} favorites={favorites} pets={pets} />
      )}
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
