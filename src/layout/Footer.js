import React from "react";
import logoWhiteNarrow from "../assets/logo-white-narrow.png";

const Footer = () => {
  return (
    <footer>
      <div id="footer-container" className="container">
        <img
          src={logoWhiteNarrow}
          alt="Little Lemon Logo White Narrow"
          width={120}
        />
        <div className="footer-list">
          <div>Doormat Navigation</div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservation">Reservation</a>
            </li>
            <li>
              <a href="/order">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div className="footer-list">
          <div>Contact</div>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="footer-list">
          <div>Social Media Links</div>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
