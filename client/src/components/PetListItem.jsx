import PhotoFavButton from "./PhotoFavButton";
// import "../styles/PhotoFavButton";
import "../styles/PetListItem.scss";

function PetListItem({ pets }) {

  const dogsAndCats = pets.filter(
    (pet) => (pet.species === 'Dog' || pet.species === 'Cat') && pet.photos.length > 0
  );

  const displayedPets = dogsAndCats.slice(0, 4);

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
                  petId={pet.id}
                // isFavorite={favorites.includes(pet.id)}
                // onToggleFavorite={toggleFavorite}
                />
                <img
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