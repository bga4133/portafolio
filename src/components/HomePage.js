import React from "react";
import { FirtsContainer } from "./FirtsContainer";
import { DescriptionTitle } from "./DescriptionTitle";
import { Projects } from "./Projects";
import { ContactMe } from "./ContactMe";
import { Skills } from "./Skills";
import { Thanks } from "./Thanks";
import { Footer } from "./Footer";

export const HomePage = () => {
  return (
    <div>
      <FirtsContainer />
      <DescriptionTitle />
      <Projects />
      <ContactMe />
      <Skills />
      <Thanks />
      <Footer />
    </div>
  );
};
