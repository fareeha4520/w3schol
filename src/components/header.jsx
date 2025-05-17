import React from 'react'

const Header = () => {
  return (
  <>
      <div className="top-header">
  <a href="#"className="logo">W3Schools</a>
  <a href="#tutorials">Tutorials</a>
  <a href="#exercises">Exercises</a>
  <a href="#certificates">Certificates</a>
  <a href="#services">Services</a>
      <a href="#">Spaces</a>
  <a href="#">For Teachers</a>
  <a href="#services">Get Certified</a>
   </div>

  <div className="right">
    <div class="search-box">
      <input type="text" placeholder="Search..."/>
    </div>
    <button className="button">Log in</button>
    <button className="button">Sign Up</button>
  </div>
  </>
  );
};

export default Header;