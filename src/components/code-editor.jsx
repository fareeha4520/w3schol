import React from "react";

const Editor = () => {
  return (
    <>
      <div className="editor-container">
        <div className="edit">
          <h1>Code Editor</h1>
        </div>
        <div className="subText">
          With our online code editor, you can edit code and view the result in
          your browser
        </div>
        <div className="edit-video">
          <img src="/codeeditor.webp"></img>
        </div>

        <div className="editor-button">Try Frontend Ediotor (HTML/CSS/JS)</div>
        <div className="editor-button" id="color">
          Try Backend Ediotor (Python/PHP/Java/C...)
        </div>
      </div>
    </>
  );
};

export default Editor;

