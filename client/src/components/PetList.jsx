import axios from 'axios';
import { useEffect, useState } from 'react';

function PetList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const response = await axios.get('http://localhost:8080/pets');
      console.log(response)
      setPets(response.data.animals);
    };
    fetchPets();
  }, []);

  return (
    <div>
      {pets && pets.map(pet => <div key={pet.id}>{pet.name}</div>)}
    </div>
  );
}

export default PetList;