import React from 'react'

const Python = () => {
  return (
    <>
       <div class="python-container">
        <div className="python">
          <h1>Python</h1>
          <p className="subtitle">A popular programming language</p>
          <div className="button-containers">
            <a href="#" className="button-kit" id="green">
              Learn Python
            </a>
            <a href="#" className="button-kit" id="black">
              Python Reference
            </a>
            <a href="#" className="button-kit" id="pink">
              Get Certified
            </a>
          </div>
        </div>

        <div className="example">
          <h2>Python Example:</h2>
          <div className="example-code-python">
            <span className='condition'>if </span>
            <span className='number'>5 </span>&gt; <span className='number' >2 </span>:
            <br></br>
             print (<span className='testing'>"Five is greater than two!" </span>)
          </div>
          <div className="butn-container">
            <button className="try">Try it Yourself</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Python;                     