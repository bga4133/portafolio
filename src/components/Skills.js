import React, { useRef, useEffect, useState } from "react";
import Img1 from "../assets/img/img1.png";
import Img2 from "../assets/img/vue.png";
import Img3 from "../assets/img/rx.png";
import Img4 from "../assets/img/node.png";
import Img5 from "../assets/img/js.png";
import Img6 from "../assets/img/sass.png";
import Img7 from "../assets/img/git.png";
import { ReactComponent as Waves } from "../assets/img/waves.svg";
import { isMobile } from "mobile-device-detect";
import { motion } from "framer-motion";

export const Skills = () => {
  const outerRef = useRef(null);
  const [inViewport, setInViewport] = useState(true);

  useEffect(() => {
    const onChange = entries => {
      entries.forEach(entry => {
        if (entry.target === outerRef.current) {
          if (entry.isIntersecting) {
            setInViewport(true);
          } else {
            setInViewport(false);
          }
        }
      });
    };
    const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
    observer.observe(outerRef.current);
  }, [outerRef]);
  // Framer motion animations
  const fadeInContainerWithStagger = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        type: "tween",
        ease: "easeIn",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring"
      }
    }
  };
  return (
    <>
      <Waves />
      <section
        ref={outerRef}
        className={!isMobile ? "section-skills" : "section-skillsResponsive"}
      >
        <div
          className={
            !isMobile
              ? "container-skills flex"
              : "container-skillsResponsive flex"
          }
        >
          {inViewport && (
            <div className="row1-skills flex">
              <motion.div
                variants={fadeInContainerWithStagger}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="separator-figures flex"
                  variants={fadeInUp}
                >
                  <div className="triangle animation"></div>
                  <div className="circle animation"></div>
                  <div className="diamond animation"></div>
                </motion.div>
                <div>
                  <motion.div variants={fadeInUp}>
                    <h2>Some about my skills</h2>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Animi quo adipisci, pariatur voluptas magnam id odit
                      quibusdam quam harum voluptates earum distinctio voluptate
                      quod dolorum reiciendis illo, et itaque temporibus.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
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
