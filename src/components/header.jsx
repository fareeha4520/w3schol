import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="top-header">
        <a href="#" className="logo">
          <img src="https://api.iconify.design/simple-icons:w3schools.svg" ></img>
        </a>
        <a href="#tutorials">Tutorials</a>
        <a href="#exercises">Exercises</a>
        <a href="#certificates">Certificates</a>
        <a href="#services">Services</a>

        <div className="right">
          <div class="search-box">
            <input type="text" placeholder="Search..." />
            <a href="#exercises">Spaces</a>
            <a href="#certificates">For teachers</a>
            <a href="#services">Get certified</a>
          </div>
          <button className="button">sign in</button>
        </div>
      </div>
      
    </>
  );
};

export default Header;

