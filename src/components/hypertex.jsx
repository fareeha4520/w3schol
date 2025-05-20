

import React from "react";
import "./hypertex.css";
const Hypertext = () => {

  return (
    <>
      <div class="html-container">
        <div className="html">
          <h1>HTML</h1>
          <p className="subtitle">The language for building web pages</p>
          <div className="button-container">
            <a href="#" className="button-kit button-green">
              Learn HTML
            </a>
            <a href="#" className="button-kit button-yellow">
              Video Tutorial
            </a>
            <a href="#" className="button-kit button-black">
              HTML Reference
            </a>
            <a href="#" className="button-kit button-pink">
              Get Certified
            </a>
          </div>
        </div>

        <div className="example">
          <h2>HTML Example:</h2>
          <div className="example-code">
            <span class="doctype">&lt;!DOCTYPE html&gt;</span>
            <br></br>
            <span class="tag">&lt;html&gt;</span>
            <br></br>
            <span class="tag">&lt;head&gt;</span>
            <br></br>
            <span class="tag">&lt;title&gt;</span>HTML Tutorial
            <span class="tag">&lt;/title&gt;</span>
            <br></br>
            <span class="tag">&lt;/head&gt;</span>
            <br></br>
            <span class="tag">&lt;body&gt;</span>
            <br></br>
            <br></br>
            <span class="tag">&lt;h1&gt;</span>This is a heading
            <span class="tag">&lt;/h1&gt;</span>
            <br></br>
            <span class="tag">&lt;p&gt;</span>This is a paragraph.
            <span class="tag">&lt;/p&gt;</span>
            <br></br>
            <br></br>
            <span class="tag">&lt;/body&gt;</span>
            <br></br>
            <span class="tag">&lt;/html&gt;</span>
            <br></br>
          </div>
          <div className="button-container">
            <button className="try">Try it Yourself</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hypertext;
