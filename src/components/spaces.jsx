import React from 'react'

const Spaces = () => {
  return (
    <>
        <div className='spaces-container'>
      <div className='space'>
        <h1>W3Schools Spaces</h1></div>
      <div className='space-text'>
       If you want to create your own website,check out <span className='color-text'> w3school spaces </span>.
       <br></br>
       It is free to use,and does not require any setup:
    </div>
    <div className='spacing-video'>
         <img src="/dynamicspaces.webp"></img>
      </div>
    <div className='learning-btn'>
    <div className='spacing-button'>Learn More</div>
</div>

    </div>
    </>
  );
}

export default Spaces;