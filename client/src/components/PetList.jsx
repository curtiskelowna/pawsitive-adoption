import axios from 'axios';
import { useEffect, useState } from 'react';
import PetListItem from './PetListItem';

function PetList({ openModal, favorites, isFavorite, addToFavorites }) {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const response = await axios.get('http://localhost:8080/pets');
      console.log(response);
      setPets(response.data.animals);
    };
    fetchPets();
  }, []);

  return (
    <div>
      <PetListItem pets={pets} openModal={openModal} 
      favorites={favorites} isFavorite={isFavorite} 
      addToFavorites={addToFavorites}/>
    </div>
  );
}

export default PetList;