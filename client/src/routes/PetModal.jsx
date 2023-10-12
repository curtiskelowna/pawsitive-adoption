import React, { useState } from 'react';
import '../styles/PhotoFavButton.scss';
import '../styles/PetDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';

const PetModal = ({ closeModal, selectedImage, favorites, addToFavorites }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (selectedImage.photos.length > 1) {
      setCurrentImageIndex((currentImageIndex + 1) % selectedImage.photos.length);
    }
  };

  const previousImage = () => {
    if (selectedImage.photos.length > 1) {
      setCurrentImageIndex((currentImageIndex - 1 + selectedImage.photos.length) % selectedImage.photos.length);
    }
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="Close" />
      </button>
      <div className="modal-content">
        <div className="photo-list-item">
          <PhotoFavButton handleClick={addToFavorites} favorites={favorites} id={selectedImage.id} />
          <div className="image-container">
            <img
              className="pet-image"
              src={selectedImage.photos.length > 0 ? selectedImage.photos[currentImageIndex].medium : "/images/cat-dog.jpg"}
              alt={`Photo of ${selectedImage.name}`}
            />
            {selectedImage.photos.length > 1 && (
              <div className="image-navigation">
                <button onClick={previousImage}>Previous</button>
                <button onClick={nextImage}>Next</button>
              </div>
            )}
          </div>
          <div className="modal-details">
            {selectedImage.photos.length === 0 && (
              <p>Breed: {selectedImage.species}</p>
            )}
            <p>Name: {selectedImage.name}</p>
            <p>Age: {selectedImage.age}</p>
            <p>Gender: {selectedImage.gender}</p>
            <p>Status: {selectedImage.status}</p>
          </div>
        </div>
        <div className="contact-container">
          <p>Contact information:</p>
          <p>{selectedImage.contact.email}</p>
          <p>{selectedImage.contact.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default PetModal;
