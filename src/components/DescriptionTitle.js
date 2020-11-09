import React from "react";
import { isMobile } from "mobile-device-detect";

export const DescriptionTitle = () => {
  return (
    <section
      className={
        !isMobile
          ? "description-title-section"
          : "description-title-sectionResponsive"
      }
    >
      <div className="inside-section-description">
        <div className="container-forms-description flex">
          <div className="triangle animation"></div>
          <div className="circle animation"></div>
          <div className="diamond animation"></div>
        </div>
        <h2>These are some projects</h2>
        <p>
          s simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has
        </p>
      </div>
    </section>
  );
};
