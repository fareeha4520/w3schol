import React from 'react'
import Carousel from './addCourasel';

const LearningSection = () => {
  return (
    <>
    <div className='learn-container'>
    <div className='learning'>
      <h1>How To Section </h1>
       <h2>Code snippets for HTML, CSS and JavaScript</h2>
       <h4>For Example, how to create a slideshow:</h4>
   </div>   
<div >
  <Carousel/>
    <div className='how-to'></div>
    <button className='how-to-btn'>Learn How To</button>
   </div>

   </div>

    </>
  );
}

export default LearningSection;