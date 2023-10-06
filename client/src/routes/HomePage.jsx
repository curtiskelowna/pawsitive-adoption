import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { UseApplicationData } from '../hooks/UseApplicationData';
import MyFavorites from "../components/MyFavorites";
import TopNavBar from '../components/TopNavBar';
import Signup from "../components/Signup";
import Footer from '../components/Footer';
import Login from '../components/Login'
import Home from '../components/home';
import "../styles/Footer.scss"
import Logout from '../components/Logout';

function HomePage() {

  const {
    addToFavorites,
    selectedImage,
    isModalOpen,
    closeModal,
    favorites,
    openModal,
    pets
  } = UseApplicationData();

  return (
    <div>
      <Router>
        <TopNavBar favorites={favorites} />
        <Routes>
          <Route path="/" element={<Home favorites={favorites} addToFavorites={addToFavorites} isModalOpen={isModalOpen} pets={pets} selectedImage={selectedImage} openModal={openModal} closeModal={closeModal} />} />
          <Route path="/MyFavorites" element={<MyFavorites favorites={favorites} pets={pets} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default HomePage;
