import '../styles/PhotoFavButton.scss';
import '../styles/PetDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';

const PetModal = ({ closeModal, selectedImage, favorites, addToFavorites }) => {

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="Close" />
      </button>
      <div className="photo-list__item">
        <PhotoFavButton handleClick={addToFavorites} favorites={favorites} id={selectedImage.id} />
        <img
          src={selectedImage.photos.length > 0 ? selectedImage.photos[0].medium : ''}
          alt={`Photo of ${selectedImage.name}`}
        />
        <div className="">
          <p>Name: {selectedImage.name}</p>
          <p>Age: {selectedImage.age}</p>
          <p>Gender: {selectedImage.gender}</p>
          <p>status: {selectedImage.status}</p>
          <p>contact: {selectedImage.contact.email}</p>
        </div>
      </div>
    </div>
  );
};

export default PetModal;