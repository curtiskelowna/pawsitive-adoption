import "../styles/Footer.scss";
import SocialFollow from "./SocialFollow";
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <div className="info-container">
        <Link to="/info/about">
          <span>About Us</span>
        </Link>
        <Link to="/info/contact">
          <span>Contact Us</span>
        </Link>
        <Link to="/info/faq">
          <span>FAQ</span>
        </Link>
      </div>
      <div className="media-icons">
        <SocialFollow />
      </div>
    </div>
  );
}

export default Footer;
