import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {

    case 'TOGGLE_FAVORITE':
      if (state.favorites.includes(action.id)) {
        axios.post(`/api/pets/${action.id}/favorite`);
        return { ...state, favorites: state.favorites.filter((item) => item !== action.id) };
      } else {
        return { ...state, favorites: [...state.favorites, action.id] };
      }

    case 'OPEN_MODAL':
      return { ...state, selectedImage: action.image, isModalOpen: true };

    case 'CLOSE_MODAL':
      return { ...state, selectedImage: null, isModalOpen: false };

    case 'LOAD_PETS':
      return { ...state, pets: action.pets };

    case 'SEARCH_PETS':
      return { ...state, searchLoading: !state.searchLoading };

    case 'LOGIN':
      return { ...state, isLoggedIn: !state.isLoggedIn };

    default:
      return state;
  }
};

export function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    favorites: [],
    isModalOpen: false,
    selectedImage: null,
    pets: [],
    searchLoading: false,
    isLoggedIn: localStorage.getItem('token') ? true : false,
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

  const loadPets = () => {
    axios.get('http://localhost:8080/pets')
      .then(json => json.data)
      .then(pets => {
        dispatch({ type: 'LOAD_PETS', pets: pets.animals });
      });
  };

  const setPets = (pets) => {
    dispatch({ type: 'LOAD_PETS', pets });
  };

  const searchPets = (search) => {
    dispatch({ type: 'SEARCH_PETS' });
    axios.get(`http://localhost:8080/pets?q=${search}`)
      .then(json => json.data)
      .then(pets => {
        dispatch({ type: 'LOAD_PETS', pets: pets.animals });
        dispatch({ type: 'SEARCH_PETS' });
      });
  };

  const login = (isLoggedIn) => {
    dispatch({ type: 'LOGIN', isLoggedIn });
  };


  useEffect(() => {
    loadPets();
  }, []);

  return { ...state, addToFavorites, openModal, closeModal, loadPets, setPets, searchPets, login };
}
