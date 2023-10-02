import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({favorites}) => {
  // if favorites = [] then isFavPhotoExist = False
  // const isFavPhotoExist = favorites.length > 0;
  return (
    <div className='fav-badge'>
      <FavIcon />
    </div>
  ) 
};

export default FavBadge;