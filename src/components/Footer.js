import React from "react";
import "./App.css";

function Footer() {
  return (
    <footer>
      <img src="/path/to/logo.pnglogo.png"className="ftrlogo"/>
         <div className="right">
        <div className="contact">
          <h1>Contact Us</h1>
          <p> Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh
             Gate near YTM Market, XYZ-343434</p>
          <p>example@gmail.com</p>
          <p> (904) 443-0343</p>
        </div>
        <div className="more">
          <h1>More</h1>
          <p>About Us</p>
          <p>Products</p>
          <p>Career</p>
          <p>Contact Us</p>
        </div>

        <div className="social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a></li>
            <li><a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
