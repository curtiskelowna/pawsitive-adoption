import '../styles/PhotoFavButton.scss';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';

const PetModal = ({ closeModal, selectedImage, favorites, addToFavorites }) => {

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="Close" />
      </button>
      <div className="photo-list__item">
        <img src={selectedImage.photos[Math.floor(Math.random() * selectedImage.photos.length)].medium} />
        <PhotoFavButton handleClick={addToFavorites} favorites={favorites} id={selectedImage.id} />
      </div>
    </div>
  );
};

export default PetModal;