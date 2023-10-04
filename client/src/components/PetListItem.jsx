import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoFavButton.scss";
import "../styles/PetListItem.scss";

function PetListItem({ pets, openModal, favorites, addToFavorites }) {

  const dogsAndCats = pets.filter(
    (pet) => (pet.species === 'Dog' || pet.species === 'Cat') && pet.photos.length > 0
  );

  const displayedPets = dogsAndCats.slice(0, 6);
    // const handleClick = (id) => {
    //   openModal(id)
    // }
  return (
    <div className="pet-block">
      <div className="available-pets">
        {displayedPets.map((pet) => (
          <div className="pet-card" key={pet.id}>
            <h2>{pet.name}</h2>
            {/* <p>Type: {pet.type}</p>
            <p>Age: {pet.age}</p>
            <p>Gender: {pet.gender}</p> */}
            {pet.photos.length > 0 && (
              <>
                <PhotoFavButton
                  handleClick={() => handleClick(pet.id)}
                  favorites={favorites}
                  id={pet.id}
                  addToFavorites={addToFavorites}
                />
                <img
                  // onClick={() => {handleClick(pet.id)}}
                  onClick={() => {openModal(pet)}}
                  src={pet.photos[Math.floor(Math.random() * pet.photos.length)].medium}
                  alt={`Photo of ${pet.name}`}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetListItem;