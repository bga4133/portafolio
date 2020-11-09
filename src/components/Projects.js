import React, { useState } from "react";
import { CardProject } from "./CardProject";
import { isMobile } from "mobile-device-detect";

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
          <CardProject information1={information1}></CardProject>
          <CardProject></CardProject>
          <CardProject></CardProject>
        </div>
        <div
          className={
            !isMobile
              ? "father-card-projects flex"
              : "father-card-projectsResponsive flex"
          }
        >
          <CardProject></CardProject>
          <CardProject></CardProject>
          <CardProject></CardProject>
        </div>
      </div>
    </section>
  );
};
