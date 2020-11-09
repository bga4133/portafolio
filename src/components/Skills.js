import React from "react";
import Img1 from "../assets/img/img1.png";
import Img2 from "../assets/img/vue.png";
import Img3 from "../assets/img/rx.png";
import Img4 from "../assets/img/node.png";
import Img5 from "../assets/img/js.png";
import Img6 from "../assets/img/sass.png";
import Img7 from "../assets/img/git.png";
import { ReactComponent as Waves } from "../assets/img/waves.svg";
import { isMobile } from "mobile-device-detect";
export const Skills = () => {
  return (
    <>
      <Waves />
      <section
        className={!isMobile ? "section-skills" : "section-skillsResponsive"}
      >
        <div
          className={
            !isMobile
              ? "container-skills flex"
              : "container-skillsResponsive flex"
          }
        >
          <div className="row1-skills flex">
            <div className="separator-figures flex">
              <div className="triangle animation"></div>
              <div className="circle animation"></div>
              <div className="diamond animation"></div>
            </div>
            <div>
              <h2>Some about my skills</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
                quo adipisci, pariatur voluptas magnam id odit quibusdam quam
                harum voluptates earum distinctio voluptate quod dolorum
                reiciendis illo, et itaque temporibus.
              </p>
            </div>
          </div>
          {!isMobile ? (
            <div className="row2-skills flex">
              <div className="skill flex animation">
                <img src={Img1} alt="Hola" />
              </div>
              <div className="skill2 flex animation">
                <img src={Img2} alt="Hola" />
              </div>
              <div className="skill3 flex animation">
                <img src={Img3} alt="Hola" />
              </div>
              <div className="skill4 flex animation">
                <img src={Img4} alt="Hola" />
              </div>
              <div className="skill5 flex animation">
                <img src={Img5} alt="Hola" />
              </div>
              <div className="skill6 flex animation">
                <img src={Img6} alt="Hola" />
              </div>
              <div className="skill7 flex animation">
                <img src={Img7} alt="Hola" />
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};
