import React from 'react';
import './styling.css'; // Ensure you have this file with the appropriate CSS

const Styling = () => {
  return (
    <>
      <div className="css-container">
        <div className="css">
          <h1>CSS</h1>
          <p className="subtitle">The language for styling web pages</p>
          <div className="button-container">
            <a href="#" className="button-kit button-green">Learn CSS</a>
            <a href="#" className="button-kit button-black">CSS Reference</a>
            <a href="#" className="button-kit button-pink">Get Certified</a>
          </div>
        </div>
      </div>

      <div className="example">
        <h2>HTML Example:</h2>
        </div>
    </>
  );
};

export default Styling;
