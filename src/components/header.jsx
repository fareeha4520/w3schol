import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
    <div className="header-container">
      <div className="top-header">
        <a className="logo" id="background">
          <img src="https://api.iconify.design/simple-icons:w3schools.svg?color=%2304aa6d" ></img>
        </a>
        <a href="#tutorials">Tutorials</a>
        <a href="#exercises">Exercises</a>
        <a href="#certificates">Certificates</a>
        <a href="#services">Services</a>

        <div className="right">
          <div class="search-box">
            <input type="text" placeholder="Search..."  />
            <div className="srch-icon">
              <img src="https://api.iconify.design/iconamoon:search-light.svg?color=%2300000b"></img>
            </div>
            <img id="gap" src="https://api.iconify.design/fluent:dark-theme-20-filled.svg?color=%23black"></img>
            <img  src="https://api.iconify.design/bi:stars.svg?color=%239763f6"></img>Plus    
            <img src="https://api.iconify.design/ph:brackets-angle-bold.svg?color=%239763f6"></img>Spaces
            <img src="https://api.iconify.design/solar:square-academic-cap-bold.svg?color=%239763f6"></img>For Teachers
            <img src="https://api.iconify.design/ic:outline-shopping-cart.svg?color=%239763f6"></img>Get Certified
          </div>
          <button className="button"><img id="contact"src="https://api.iconify.design/material-symbols:person-outline.svg?color=%23ffffff"></img> Sign in</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;

