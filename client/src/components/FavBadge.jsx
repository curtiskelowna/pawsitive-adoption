import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({favorites}) => {

  const isFavPetExist = favorites.length > 0;

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPetExist} selected={true} />
    </div>
  ) 
};

export default FavBadge;