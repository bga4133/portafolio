import React from "react";
import { ReactComponent as ImgFirts } from "../assets/img/undraw_completed_ngx6.svg";
import { isMobile } from "mobile-device-detect";

export const Thanks = () => {
  return (
    <section
      className={!isMobile ? "thanks-section flex" : "thanks-sectionResponsive"}
    >
      <div className="container-thanks flex">
        <div className="img-thanks-row flex">
          <ImgFirts className="svg-imgFirts animation" />
        </div>
        <div className="text-thanks-row">
          <div className="separator-figures flex">
            <div className="triangle animation"></div>
            <div className="circle animation"></div>
            <div className="diamond animation"></div>
          </div>
          <h2>Thanks for some</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dicta!
            Officia, provident! Laborum, doloremque. Harum, ipsa consequatur!
            Ratione corrupti illo fugit provident incidunt sit harum neque
            veritatis. Officiis, debitis illum?
          </p>
        </div>
      </div>
    </section>
  );
};
