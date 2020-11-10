import React from "react";
import { ReactComponent as Travel } from "../assets/img/travel.svg";
import { isMobile } from "mobile-device-detect";
import { motion } from "framer-motion";

export const CardProject = ({ information1 }) => {
  console.log(information1);

  return (
    <>
      <motion.div
        className={
          !isMobile ? "card-project flex" : "card-projectResponsive flex"
        }
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="img-father-project">
          <Travel />
        </div>
        <div className="description-father-project flex">
          <h2>title</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, non hic vel accusantium porro consectetur tempora
            consequuntur,
          </p>
          <a href="#" className="button-viewProject flex">
            View Project
          </a>
        </div>
      </motion.div>
    </>
  );
};
