import React from 'react'

const Query = () => {
  return (
    <>
    <div class="query-container">
        <div className="query">
          <h1>SQL</h1>
          <p className="subtitle">A language for accessing databases</p>
          <div className="button-containers">
            <a href="#" className="button-kit" id="green">
              Learn SQL
            </a>
            <a href="#" className="button-kit" id="black">
              SQL Reference
            </a>
            <a href="#" className="button-kit" id="pink">
              Get Certified
            </a>
          </div>
        </div>

        <div className="example">
          <h2>SQL Example:</h2>
          <div className="example-code-query">
            <span className='keyword'>SELECT </span>*
            <span className='keyword'> FROM </span>customers
            <br></br> 
            <span className='keyword' >WHERE </span>Country=
            <span className='cntry'>'Mexico'</span> ;
          </div>
          <div className="butn-container">
            <button className="try">Try it Yourself</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Query;                         