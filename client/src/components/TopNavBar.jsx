import "../styles/TopNavBar.scss";
import FavBadge from "./FavBadge";

function TopNavBar({ favorites }) {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">LOGO</span>
      <h2>Pawsitive Adoptions</h2>
      <h2>Cats</h2>
      <h2>Dogs</h2>
      <div className="user">
        <FavBadge favorites={favorites} className="photo-list__fav-icon-svg"
        // handleClick={() => { addToFavorites(pet.id) }}
        // id={pet.id}
        />
        <h2>User</h2>
      </div>
    </div>
  );
}

export default TopNavBar;
