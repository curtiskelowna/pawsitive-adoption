
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from "../components/Login";
import Signup from "../components/Signup";
import MyFavorites from "../components/MyFavorites";
import Home from '../components/home';

function HomePage() {
return (

    <Router>

        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/MyFavorites" element={<MyFavorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

    </Router>
)
}

export default HomePage;