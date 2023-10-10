import React from 'react';
import "../styles/Favorites.scss";

function MyFavorites({ pets, favorites }) {

  const favoritedPets = pets.filter((pet) => favorites.includes(pet.id));

  return (
    <div className="favs-container">
      <h2>My Favorites</h2>
      <h3>Hi there, future human of mine! 🐾 I can't wait to be your loyal companion, share endless cuddles, and brighten your every day. Let's make some wonderful memories together!  🐶🐱❤️</h3>
      <div className="container">
        {favoritedPets.map((favoritePet) => (
          <div className="flip-area">
            <div className="flip-box" key={favoritePet.id}>
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <div>
                    {favoritePet.photos.length > 0 ? (
                      <img className="card-image" src={favoritePet.photos[0].medium} alt={favoritePet.name} />
                    ) : (
                      <img className="card-image" src="/images/cat-dog.jpg" alt="Default Photo" />
                    )}
                    {/* <p>{favoritePet.name}</p>
                    <p>{favoritePet.age}</p> */}
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="back-details">
                    <p>{favoritePet.type}</p>
                    <p>{favoritePet.status}</p>
                    <p>Name: {favoritePet.name}</p>
                    <p>Age: {favoritePet.age}</p>
                    <p>Gender: {favoritePet.gender}</p>
                  </div>
                  <div className="btn">
                    <button>Adopt me!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyFavorites;

