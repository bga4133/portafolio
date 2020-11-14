import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ContactMe } from "./components/ContactMe";
import { Thanks } from "./components/Thanks";
import { SkeletonLoader } from "./components/Skeleton";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { HomePage } from "./components/HomePage";

export const Portafolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading === false ? (
        <Router>
          <ScrollToTop />
          <Header />
          <Switch>
            <div>
              <Route path="/" exact component={HomePage} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={ContactMe} />
              <Route path="/skills" component={Skills} />
              <Route path="/thanks" component={Thanks} />
            </div>
          </Switch>
        </Router>
      ) : (
        <SkeletonLoader />
      )}
    </>
  );
};
