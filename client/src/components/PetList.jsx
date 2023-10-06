import PetListItem from './PetListItem';

function PetList({ openModal, favorites, isFavorite, addToFavorites, pets }) {

  const dogsAndCats = pets.filter(
    (pet) => (pet.species === 'Dog' || pet.species === 'Cat')
  );

  const displayedPets = dogsAndCats.slice(0, 10);

  return (
    <div>
      <div className="pet-block">
        <div className="available-pets">
          {displayedPets.map((pet) => (
            <PetListItem key={pet.id} pet={{...pet}} openModal={openModal}
              favorites={favorites} isFavorite={isFavorite}
              addToFavorites={addToFavorites} />
          ))}
    </div>
      </div>
    </div>
  );
}

export default PetList;
