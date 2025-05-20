import React from "react";
import "./styling.css";
const Styling = () => {
  return (
    <>
      <div class="css-container-1">
        <div className="css">
          <h1>Css</h1>
          <p className="subtitle">The language for styling web pages</p>
          <div className="button-container">
            <a href="#" className="button-kit button-green">
              Learn CSS
            </a>
            <a href="#" className="button-kit button-black">
              CSS Reference
            </a>
            <a href="#" className="button-kit button-pink">
              Get Certified
            </a>
          </div>
        </div>

        <div className="example">
          <h2>CSS Example:</h2>
          <div className="example-code">
            <span className="sector">body</span> {'{'}<br />
      &nbsp;&nbsp;<span className="property">background-color</span>: <span className="value">lightblue</span>;<br />
      {'}'}<br />
      <span className="sector">h1</span> {'{'}<br />
      &nbsp;&nbsp;<span className="property">color</span>: <span className="value">white</span>;<br />
      &nbsp;&nbsp;<span className="property">text-align</span>: <span className="value">center</span>;<br />
      {'}'}<br />
      <span className="sector">p</span> {'{'}<br />
      &nbsp;&nbsp;<span className="property">font-family</span>: <span className="value">verdana</span>;<br />
      {'}'}
          </div>
          <div className="button-container">
            <button className="try">Try it Yourself</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Styling;