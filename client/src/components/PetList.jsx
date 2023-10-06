import axios from 'axios';
import { useEffect, useState } from 'react';
import PetListItem from './PetListItem';

function PetList({ openModal, favorites, isFavorite, addToFavorites, pets }) {

  return (
    <div>
      <PetListItem pets={pets} openModal={openModal}
      favorites={favorites} isFavorite={isFavorite}
      addToFavorites={addToFavorites} />
    </div>
  );
}

export default PetList;
