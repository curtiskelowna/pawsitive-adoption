import './App.css';
import React from 'react';
import HomePage from './routes/HomePage';
import Footer from './components/Footer';
import "./styles/Footer.scss";

function App() {
  return (
    <div className="App">
      <HomePage />
      <div id="page-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
