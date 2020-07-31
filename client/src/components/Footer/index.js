import React from "react";
import "./style.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="image-div">
      <p className="powered">Powered JATAG</p>

      <div className="icon">
        <a
          className="links"
          target="_blank"
          href={"https://www.facebook.com/r.php"}
        >
          <FaFacebook />
        </a>
        <a
          className="links"
          target="_blank"
          href={"https://www.instagram.com/"}
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
