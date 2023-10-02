import axios from 'axios';
import { useEffect, useState } from 'react';
import PetListItem from './PetListItem';

function PetList() {
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
      <PetListItem pets={pets} />
    </div>
  );
}

export default PetList;