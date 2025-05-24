import React from "react";

const Spaces = () => {
  return (
    <>
      <div className="spaces-container">
        <div className="space">
          <h1>W3Schools Spaces</h1>
        </div>
        <div className="space-text">
          If you want to create your own website,check out{" "}
          <span className="color-text"> w3school spaces </span>.<br></br>
          It is free to use,and does not require any setup:
        </div>
        <div className="spacing-video">
          {/* freeha ya video nahi ha app usa rightclick karka daikh leya karo jo video chal rahi the wo basically gif tha or gif <img/> ka tag ma lagta ha naa ka <video/> */}
          {/* or second cheez ya ka app na image ya video public ka folder ma save karna ha or usa aasa call karna ha jasa mana ider nicha call kar deya ha */}
          <img src="/dynamicspaces.webp"></img>
        </div>
        <div className="learning-btn">
          <div className="spacing-button">Learn More</div>
        </div>
      </div>
    </>
  );
};

export default Spaces;

