import "../styles/TopNavBar.scss";
import FavBadge from "./FavBadge";

function TopNavBar() {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">Nav Bar</span>
      <FavBadge className="photo-list__fav-icon-svg" />
    </div>
  );
}


export default TopNavBar;