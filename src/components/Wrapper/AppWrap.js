import React from "react";
import Navigation from "../Navigation";

//Higher Order Component
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={` ${classNames}`}>
        <div className="app__wrapper app__flex">
          <Component />
        </div>
        <Navigation active={idName} />
      </div>
    );
  };

export default AppWrap;
