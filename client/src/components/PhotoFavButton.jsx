import React from 'react';
import FavIcon from './FavIcon';
import "../styles/PetListItem.scss";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({handleClick, favorites, id}) {

const checkFavorite = favorites?.includes(id)

  return (
    <div onClick={() => handleClick(id)} className="photo-list__fav-icon">
      <FavIcon selected={checkFavorite} id={id}/>
    </div>
  );
}

export default PhotoFavButton;