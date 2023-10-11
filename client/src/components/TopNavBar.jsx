import "../styles/TopNavBar.scss";
import "../styles/Logout.scss";
import FavBadge from "./FavBadge";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function TopNavBar({ favorites, login, isLoggedIn }) {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const fullname = userData ? userData.fullname : null;
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    console.log('Logout successful');
    login();
  };
  return (
    <div className="top-nav-bar">
      <Link to="/" className="page-name" reloadDocument alt="Home">🐾 Pawsitive Adoptions 🐾</Link>
      <div className="user">
        <Link to="/MyFavorites">
          <FavBadge favorites={favorites} className="photo-list__fav-icon-svg"
          />
        </Link>
        {isLoggedIn ? (
          <>
            <h2>Welcome {fullname}!</h2>
            <span className="logout-btn" onClick={logout} style={{ cursor: 'pointer' }}>Log out</span>
          </>
        ) : (
          <div className="user-container">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopNavBar;
