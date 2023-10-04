import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function SocialFollow() {
  return (
    <div className="social-container">

      <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>

      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>

      <a href="https://twitter.com/digitalocean" target="_blank" rel="me noopener noreferrer" title="X (Twitter)" className=" twitter social "><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0468 10.3155L22.0566 1.00003H20.1585L13.2036 9.08855L7.6488 1.00003H1.24194L9.64196 13.2313L1.24194 23H3.14011L10.4847 14.4583L16.351 23H22.7578L14.0464 10.3155H14.0468ZM11.447 13.3391L10.5959 12.1211L3.82405 2.42968H6.73952L12.2045 10.251L13.0556 11.4689L20.1594 21.6354H17.244L11.447 13.3395V13.3391Z" fill="currentColor"></path></svg></a>

      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}

export default SocialFollow;