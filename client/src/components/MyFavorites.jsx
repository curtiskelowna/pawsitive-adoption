import React from 'react';


function MyFavorites({ pets, favorites }) {
  // Filter the pets based on the favorite IDs in the 'favorites' prop
  const favoritedPets = pets.filter((pet) => favorites.includes(pet.id));

  return (
    <div>
      <h2>My Favorites</h2>
      <div>
        {favoritedPets.map((favoritePet) => (
          <div key={favoritePet.id}>
            {favoritePet.photos.length > 0 ? (
              <>
                <img src={favoritePet.photos[0].medium} alt={favoritePet.name} />
              </>
            ) : (
              <img src="/images/cat-dog.jpg" alt="Default Photo" />
            )}
            <p>{favoritePet.name}</p>
            <p>{favoritePet.age}</p>
            <p>{favoritePet.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyFavorites;

