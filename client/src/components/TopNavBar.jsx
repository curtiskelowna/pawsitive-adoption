import "../styles/TopNavBar.scss";
import FavBadge from "./FavBadge";
import { Link } from "react-router-dom";

function TopNavBar({ favorites }) {
  const isLoggedIn = localStorage.getItem('token');
  const { fullname } = JSON.parse(localStorage.getItem('userData'));

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">LOGO</span>
      <h2>Pawsitive Adoptions</h2>
      <h2>Cats</h2>
      <h2>Dogs</h2>
      <div className="user">
        <FavBadge favorites={favorites} className="photo-list__fav-icon-svg" />
        {isLoggedIn ? (
          <>
            <h4>{fullname}</h4>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default TopNavBar;
