import React from "react";
import { ReactComponent as ImgFirts } from "../assets/img/undraw_code_review_l1q9.svg";
import { isMobile } from "mobile-device-detect";

export const ContactMe = () => {
  return (
    <section
      className={
        !isMobile ? "section-contactMe" : "section-contactMeResponsive"
      }
    >
      <div
        className={
          !isMobile
            ? "container-contactMe flex"
            : "container-contactMeResponsive flex"
        }
      >
        <div
          className={
            !isMobile
              ? "father-img-contactMe flex"
              : "father-img-contactMeResponsive flex"
          }
        >
          <ImgFirts className="animation" />
        </div>
        <div
          className={
            !isMobile
              ? "father-form-contactMe flex"
              : "father-form-contactMeResponsive flex"
          }
        >
          <form action="" className="flex">
            <h2>Send me a message</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            </p>
            <div className="father-input-contactMe flex">
              <input type="text" placeholder="Send me a message" />
              <button type="submit">Send me</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};