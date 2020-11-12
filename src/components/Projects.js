import React, { useState } from "react";
import { CardProject } from "./CardProject";
import { isMobile } from "mobile-device-detect";
import { motion } from "framer-motion";
import { ReactComponent as Travel } from "../assets/img/travel.svg";
import { ReactComponent as ReactImg1 } from "../assets/img/reactImg1.svg";
import { ReactComponent as Chatbot } from "../assets/img/chatbot.svg";
import { ReactComponent as Scooter } from "../assets/img/scoter.svg";
import { ReactComponent as Pwa } from "../assets/img/pwa.svg";
import { ReactComponent as Mern } from "../assets/img/mern.svg";
export const Projects = () => {
  const [information1, setInformation1] = useState([
    {
      name: "brayan",
      addres: "medellin"
    }
  ]);
  return (
    <section
      className={!isMobile ? "section-projects" : "section-projectsResponsive"}
    >
      <div
        className={
          !isMobile
            ? "container-projects flex"
            : "container-projectsResponsive flex"
        }
      >
        <div
          className={
            !isMobile
              ? "father-card-projects flex"
              : "father-card-projectsResponsive flex"
          }
        >
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
              <h2>Reserve Ahora</h2>
              <p>
                I contributed to the development of reserveahora.com using
                technologies such as javascript vuejs es6
              </p>
              <a href="#" className="button-viewProject flex">
                View Projects
              </a>
            </div>
          </motion.div>
          <motion.div
            className={
              !isMobile ? "card-project flex" : "card-projectResponsive flex"
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="img-father-project">
              <ReactImg1 />
            </div>
            <div className="description-father-project flex">
              <h2>Custom Hooks</h2>
              <p>
                They are hooks made in react to fetch apis with axios and thus
                be able to reuse a lot of code that´s cool
              </p>
              <a href="#" className="button-viewProject flex">
                View Projects
              </a>
            </div>
          </motion.div>
          <motion.div
            className={
              !isMobile ? "card-project flex" : "card-projectResponsive flex"
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="img-father-project">
              <Chatbot />
            </div>
            <div className="description-father-project flex">
              <h2>Chatbot</h2>
              <p>
                it is a chatbot echo with nodejs web sockets it was used to
                automatically answer a restaurant menu
              </p>
              <a href="#" className="button-viewProject flex">
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
        <div
          className={
            !isMobile
              ? "father-card-projects flex"
              : "father-card-projectsResponsive flex"
          }
        >
          <motion.div
            className={
              !isMobile ? "card-project flex" : "card-projectResponsive flex"
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="img-father-project">
              <Scooter />
            </div>
            <div className="description-father-project flex">
              <h2>Meep</h2>
              <p>
                meep was a solution to an electric scooter app, it allowed to
                know the state of the scooter, batery etc.
              </p>
              <a href="#" className="button-viewProject flex">
                View Projects
              </a>
            </div>
          </motion.div>
          <motion.div
            className={
              !isMobile ? "card-project flex" : "card-projectResponsive flex"
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="img-father-project">
              <Pwa />
            </div>
            <div className="description-father-project flex">
              <h2>Hotel mobile pwa</h2>
              <p>
                It is a responsive application used by many hotels that allows
                you to reserve rooms , hotels with gym etc.
              </p>
              <a href="#" className="button-viewProject flex">
                View Projects
              </a>
            </div>
          </motion.div>
          <motion.div
            className={
              !isMobile ? "card-project flex" : "card-projectResponsive flex"
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="img-father-project">
              <Mern />
            </div>
            <div className="description-father-project flex">
              <h2>Mern stack</h2>
              <p>
                it is a crud using the mern stack, it allows you to create read,
                update and remove taks, using axios async await es7
              </p>
              <a href="#" className="button-viewProject flex">
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
