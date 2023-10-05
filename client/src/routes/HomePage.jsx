import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { UseApplicationData } from '../hooks/UseApplicationData';
import Login from "../components/Login";
import Signup from "../components/Signup";
import MyFavorites from "../components/MyFavorites";
import "../styles/Footer.scss"
import Home from '../components/home';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';


function HomePage() {

  const {
    favorites
  } = UseApplicationData();

  return (
    <div className='page-container'>
      <Router>
        <TopNavBar favorites={favorites} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyFavorites" element={<MyFavorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default HomePage;