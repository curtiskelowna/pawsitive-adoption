import "../styles/Footer.scss";
import SocialFollow from "./SocialFollow";

function Footer() {

  return (
    <div className="footer-container">
      <div className="info-container">
        <a href=""><span>About Us</span></a>
        <a href=""><span>Contact Us</span></a>
        <a href=""><span>FAQ</span></a>
      </div>
      <div className="media-icons">
        <SocialFollow />
      </div>
    </div>
  );
}


export default Footer;