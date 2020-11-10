import React from "react";
import { isMobile } from "mobile-device-detect";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <>
      {!isMobile ? (
        <header>
          <div className="row-header1">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="logo flex">
                <h1>B</h1>
              </div>
            </motion.div>

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
