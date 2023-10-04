import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {

    case 'TOGGLE_FAVORITE':
      if (state.favorites.includes(action.id)) {
        return { ...state, favorites: state.favorites.filter((item) => item !== action.id) };
      } else {
        return { ...state, favorites: [...state.favorites, action.id] };
      }

    case 'OPEN_MODAL':
      return { ...state, selectedImage: action.image, isModalOpen: true };

    case 'CLOSE_MODAL':
      return { ...state, selectedImage: null, isModalOpen: false };

    default:
      return state;
  }
};

export function UseApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    favorites: [],
    isModalOpen: false,
    selectedImage: null,
  });

  const addToFavorites = (id) => {
    dispatch({ type: 'TOGGLE_FAVORITE', id });
  };

  const openModal = (image) => {
    dispatch({ type: 'OPEN_MODAL', image });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };


  return { ...state, addToFavorites, openModal, closeModal };
}
