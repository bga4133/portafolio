import React, { useRef, useEffect, useState } from "react";
import { ReactComponent as ImgFirts } from "../assets/img/undraw_completed_ngx6.svg";
import { isMobile } from "mobile-device-detect";
import { motion } from "framer-motion";

export const Thanks = () => {
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
    <section
      ref={outerRef}
      className={!isMobile ? "thanks-section flex" : "thanks-sectionResponsive"}
    >
      {inViewport && (
        <div className="container-thanks flex">
          <div className="img-thanks-row flex">
            <ImgFirts className="svg-imgFirts animation" />
          </div>
          <div className="text-thanks-row">
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
              <motion.div variants={fadeInUp}>
                <h2>Thanks u!</h2>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <p>
                  Thank you very much for viewing my portfolio and I hope you
                  have a great day.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
};
