import React from "react";
import { isMobile } from "mobile-device-detect";

export const Header = () => {
  return (
    <>
      {!isMobile ? (
        <header>
          <div className="row-header1">
            <div className="logo flex">
              <h1>B</h1>
            </div>
            <ul>
              <li>Projects</li>
              <li>Contact me</li>
              <li>Skills</li>
              <li>Footer</li>
            </ul>
          </div>
          <div className="row-header2"></div>
        </header>
      ) : null}
    </>
  );
};
