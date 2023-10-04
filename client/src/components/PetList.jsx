import axios from 'axios';
import { useEffect, useState } from 'react';

function PetList() {
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
      <h2>Pet List</h2>
      {pets.map((pet) => (
        <div key={pet.id}>
          <h2>{pet.name}</h2>
          <p>Type: {pet.type}</p>
          <p>Age: {pet.age}</p>
          <p>Gender: {pet.gender}</p>
          {/* Display photos */}
          {pet.photos &&
            pet.photos.map((photo, index) => (
              <img key={index} src={photo.medium} alt={`Photo of ${pet.name}`} />
            ))}
        </div>
      ))}
    </div>
  );
}

export default PetList;
