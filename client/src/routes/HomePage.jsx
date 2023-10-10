import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useApplicationData } from '../hooks/useApplicationData';
import MyFavorites from "../components/MyFavorites";
import TopNavBar from '../components/TopNavBar';
import Signup from "../components/Signup";
import Footer from '../components/Footer';
import Login from '../components/Login';
import Home from '../components/Home';
import "../styles/Footer.scss";

function HomePage() {

  const {
    addToFavorites,
    selectedImage,
    isModalOpen,
    closeModal,
    favorites,
    openModal,
    pets,
    setPets,
    searchPets,
    searchLoading,
    login,
    isLoggedIn
  } = useApplicationData();

  return (
    <div className="bg">
      <Router>
        <TopNavBar favorites={favorites} isLoggedIn={isLoggedIn} login={login} />
        <Routes>
          <Route path="/" element={<Home favorites={favorites} addToFavorites={addToFavorites} isModalOpen={isModalOpen} pets={pets} selectedImage={selectedImage} openModal={openModal} closeModal={closeModal} setPets={setPets} searchPets={searchPets} loading={searchLoading} />} />
          <Route path="/MyFavorites" element={<MyFavorites favorites={favorites} pets={pets} />} />
          <Route path="/login" element={<Login login={login} isLoggedIn={isLoggedIn} />} />
          <Route path="/signup" element={<Signup login={login} isLoggedIn={isLoggedIn} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default HomePage;
