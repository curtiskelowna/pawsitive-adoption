import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoFavButton.scss";
import "../styles/PetListItem.scss";

function PetListItem({ pet, openModal, favorites, addToFavorites }) {

  const isLongName = pet.name.length > 10;

  return (
    <div className={`pet-card ${isLongName ? 'long-name' : ''}`}>
      <h2>{pet.name}</h2>
      {pet.photos.length > 0 ? (
        <>
          <PhotoFavButton
            handleClick={() => { addToFavorites(pet.id); }}
            id={pet.id}
            favorites={favorites}
          />
          <img
            onClick={() => {
              openModal(pet);
            }}
            src={pet.photos.length > 0 ? pet.photos[0].medium : ''}
            alt={`Photo of ${pet.name}`}
          />
        </>
      ) : (
        <img
          onClick={() => {
            openModal(pet);
          }}
          src="/images/cat-dog.jpg"
        />
      )}
    </div>
  );
}

export default PetListItem;
