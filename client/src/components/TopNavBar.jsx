import "../styles/TopNavBar.scss";
import FavBadge from "./FavBadge";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function TopNavBar({ favorites }) {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">LOGO</span>
      <Link to="/" className="page-name">Pawsitive Adoptions</Link>
      <h2>Cats</h2>
      <h2>Dogs</h2>
      
        <div className="user">
          <Link to="/MyFavorites">
            <FavBadge favorites={favorites} className="photo-list__fav-icon-svg"
            // handleClick={() => { addToFavorites(pet.id) }}
            // id={pet.id}
            />
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </nav>

        </div>

    </div>
  );
}

export default TopNavBar;
