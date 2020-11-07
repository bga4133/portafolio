import React from "react";
import { Header } from "./components/Header";
import { FirtsContainer } from "./components/FirtsContainer";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { DescriptionTitle } from "./components/DescriptionTitle";

export const Portafolio = () => {
  return (
    // portafolio brayan app
    <div>
      {/* header app */}
      <Header />
      <FirtsContainer />
      <DescriptionTitle />
      <Projects />
      <Skills />
    </div>
  );
};
