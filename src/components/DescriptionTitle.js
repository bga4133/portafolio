import React, { useRef, useEffect, useState } from "react";
import { isMobile } from "mobile-device-detect";
import { motion } from "framer-motion";

export const DescriptionTitle = () => {
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
      className={
        !isMobile
          ? "description-title-section"
          : "description-title-sectionResponsive"
      }
      ref={outerRef}
    >
      {inViewport && (
        <motion.div
          className="inside-section-description"
          variants={fadeInContainerWithStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="container-forms-description flex"
            variants={fadeInUp}
          >
            <div className="triangle animation"></div>
            <div className="circle animation"></div>
            <div className="diamond animation"></div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h2>These are some of my projects</h2>
          </motion.div>
          <p>
            Here you can see some of my projects, I really like javascript and
            its React Vue frameworks, also nodejs, I have experience as a react
            developer and vue developer, I like rxjs typescript and many more
          </p>
        </motion.div>
      )}
    </section>
  );
};
