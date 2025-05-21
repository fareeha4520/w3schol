import React from 'react'

const Editor = () => {
  return (
    <>
    <div className='editor-container'>
      <div className='edit'>
        <h1>Code Editor</h1></div>
      <div className='subText'>
      With our online code editor, you can edit code and view the result in your browser
    </div>
    <div className='edit-video'>
        <video width="980" autoPlay  loop controls>
    <source src="https://www.w3schools.com/codeeditor.mp4" type="video/mp4" />
      </video>
      </div>
    
      <div className='editor-button'>Try Frontend Ediotor (HTML/CSS/JS)</div>
      <div className='editor-button' id='color'>Try Backend Ediotor (Python/PHP/Java/C...)</div>
      

   </div>


    
    </>
  );
}

export default Editor;