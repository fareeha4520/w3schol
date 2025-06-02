import React from 'react'

const Scripting = () => {
  return (
    <>
    <div class="script-container">
        <div className="script">
          <h1>JavaScript</h1>
          <p className="subtitle">The language for programming web pages</p>
          <div className="button-containers">
            <a href="#" className="button-kit"id="green">
              Learn JavaScript
            </a>
            <a href="#" className="button-kit" id="button-blacks">
              JavaScript Reference
            </a>
            <a href="#" className="button-kit" id="pink">
              Get Certified
            </a>
          </div>
        </div>

        <div className="example">
          <h2>JavaScript Example:</h2>
          <div className="example-code">
            <span class="html-tag">&lt;button</span> <span class="html-attr">onclick</span>=<span class="string">"myFunction()"</span><span class="html-tag">&gt;</span>Click Me!<br></br><span class="html-tag">&lt;/button&gt;</span>
<br></br><br></br>
<span class="html-tag">&lt;script&gt;</span><br></br>
<span class="string">function</span> <span class="function">myFunction</span>() {'{'}<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">let</span> x = document.<span class="function">getElementById</span>(<span class="html-attr">"demo"</span>);<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;x.style.<span class="plain">fontSize</span> = <span class="string">"25px"</span>;<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;x.style.<span class="plain">color</span> = <span class="string">"red"</span>;<br></br>
{'}'}<br></br>
<span class="html-tag">&lt;/script&gt;</span>
          </div>
           <div className="butn-container">
         <button className="try">Try it Yourself</button></div>
        </div>
      </div>
    </>
  );
};
export default Scripting;
