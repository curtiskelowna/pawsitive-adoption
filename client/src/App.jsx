import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PetList from './components/PetList';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My Pet App</h1>
        <div>
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

        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<PetList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
