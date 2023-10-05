import React from 'react';

function MyFavorites({ favorites }) {
  return (
    <div>
      <h2>My Favorites</h2>
      <ul>
        {/* {favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))} */}
      </ul>
    </div>
  );
}

export default MyFavorites;
