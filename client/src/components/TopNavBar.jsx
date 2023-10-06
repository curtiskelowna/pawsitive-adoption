import "../styles/TopNavBar.scss";
import FavBadge from "./FavBadge";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function TopNavBar({ favorites }) {
  const isLoggedIn = localStorage.getItem('token');
  const userData = JSON.parse(localStorage.getItem('userData'));
  const fullname = userData ? userData.fullname : null;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">LOGO</span>
      <Link to="/" className="page-name">Pawsitive Adoptions</Link>
        <div className="user">
          <Link to="/MyFavorites">
            <FavBadge favorites={favorites} className="photo-list__fav-icon-svg"
            // handleClick={() => { addToFavorites(pet.id) }}
            // id={pet.id}
            />
          </Link>
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
