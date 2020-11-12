import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { FirtsContainer } from "./components/FirtsContainer";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { DescriptionTitle } from "./components/DescriptionTitle";
import { Footer } from "./components/Footer";
import { ContactMe } from "./components/ContactMe";
import { Thanks } from "./components/Thanks";
import { SkeletonLoader } from "./components/Skeleton";

export const Portafolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div>
          {/* header app */}
          <Header />
          <FirtsContainer />
          <DescriptionTitle />
          <Projects />
          <ContactMe />
          <Skills />
          <Thanks />
          <Footer />
        </div>
      ) : (
        <SkeletonLoader />
      )}
    </>
  );
};
