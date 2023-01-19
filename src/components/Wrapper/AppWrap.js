import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";

//implementera CV som en symbol precis som social media, kan synas på andra sidan

//Higher Order Component
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={` ${classNames}`}>
        <div className="app__wrapper app__flex">
          <Component />
        </div>
        <SocialMedia />
      </div>
    );
  };

export default AppWrap;
