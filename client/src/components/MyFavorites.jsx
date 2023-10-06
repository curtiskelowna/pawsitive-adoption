import React from 'react';


function MyFavorites({ pets, favorites }) {
  // Filter the pets based on the favorite IDs in the 'favorites' prop
  const favoritedPets = pets.filter((pet) => favorites.includes(pet.id));

  return (
    <div>
      <h2>My Favorites</h2>
      <ul>
        {favoritedPets.map((favoritePet) => (
          <li key={favoritePet.id}>
            <img src={favoritePet.imageURL} alt={favoritePet.name} />
            <p>{favoritePet.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyFavorites;

