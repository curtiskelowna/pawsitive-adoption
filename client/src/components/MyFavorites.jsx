import React from 'react';
import "../styles/Favorites.scss";

function MyFavorites({ pets, favorites }) {
  // Filter the pets based on the favorite IDs in the 'favorites' prop
  const favoritedPets = pets.filter((pet) => favorites.includes(pet.id));

  return (
    <div className="favs-container">
      <h2>My Favorites</h2>
      <div className="favs">
        {favoritedPets.map((favoritePet) => (
          <div className="flip-card">
            <div className="card-front">
                <div key={favoritePet.id}>
                  {favoritePet.photos.length > 0 ? (
                    <>
                      <img className="card-image" src={favoritePet.photos[0].medium} alt={favoritePet.name} />
                    </>
                  ) : (
                    <img src="/images/cat-dog.jpg" alt="Default Photo" />
                  )}
                  <p>{favoritePet.name}</p>
                  <p>{favoritePet.age}</p>
                </div>
            </div>
                <div className="card-back">
                  <div className="back-details">
                  <p>{favoritePet.type}</p>
                  <p>{favoritePet.status}</p>
                  </div>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyFavorites;

