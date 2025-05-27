import React from 'react'

const SearchingTutorial = () => {
  return (
<>
<div className='searching-tutorial'>
 <h1>Learn to Code</h1>
        <p className="subtitle">With the world's largest web developer site.</p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search our tutorials, e.g HTML"
          ></input>
          <button className="click">
            <img src="https://api.iconify.design/material-symbols:search.svg "></img>
          </button>
        </div>
        <h2>Not Sure Where To Begin?</h2>
        </div>
</>
  );
}

export default SearchingTutorial;