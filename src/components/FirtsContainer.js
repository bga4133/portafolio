import React from "react";
import { ReactComponent as ImgFirts } from "../assets/img/undraw_programming_2svr.svg";

export const FirtsContainer = () => {
  return (
    <section>
      <div className="container-firtsPage">
        <div className="row1-containerFirts">
          <div className="container-Information">
            <h1>
              Hey I'm,<strong> Brayan Garcia</strong>
              <hr></hr>
            </h1>
            <div className="description-information">
              <h3>
                <strong>
                  I'm Frontend developer (React, Vue) developer with crazy for
                  mobile & web desing.
                </strong>
              </h3>
            </div>
            <div className="social-networks">
              <p>Social networks</p>
              <div className="father-social-links">
                <a href="#">a</a>
                <a href="#">a</a>
                <a href="#">a</a>
                <a href="#">a</a>
              </div>
            </div>
            <div className="contact-buttons">
              <a href="#">Github</a>
              <a href="#">Contac me</a>
            </div>
          </div>
        </div>
        <div className="container-imgInfo">
          <ImgFirts />
        </div>
      </div>
    </section>
  );
};
