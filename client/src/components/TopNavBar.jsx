import "../styles/TopNavBar.scss";
import FavBadge from "./FavBadge";

function TopNavBar() {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">LOGO</span>
      <h2>Pawsitive Adoptions</h2>
      <h2>Cats</h2>
      <h2>Dogs</h2>
      <div className="user">
        <FavBadge className="photo-list__fav-icon-svg" />
        <h2>User</h2>
      </div>
    </div>
  );
}

export default TopNavBar;
