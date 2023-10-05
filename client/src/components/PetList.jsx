import axios from 'axios';
import { useEffect, useState } from 'react';
import PetListItem from './PetListItem';

function PetList({ openModal, favorites, isFavorite, addToFavorites, searchResults }) {
  const [pets, setPets] = useState([]);

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
    <div>
      <PetListItem pets={pets} searchResults={searchResults} openModal={openModal}
        favorites={favorites} isFavorite={isFavorite}
        addToFavorites={addToFavorites} />
    </div>
  );
}

export default PetList;
