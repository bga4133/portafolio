import React from "react";
import { isMobile } from "mobile-device-detect";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact me</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/">Blog</Link>
            </ul>
          </div>
          <div className="row-header2"></div>
        </header>
      ) : null}
    </>
  );
};
