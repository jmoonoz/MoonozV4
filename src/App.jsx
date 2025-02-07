import React, { useState } from "react";
import "./App.scss";
import { AnimatePresence } from "motion/react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Project";
import Contact from "./Pages/Contact/Contact";
import Error from "./Pages/Error/Error";
import NavBar from "./Components/navBar/NavBar";
import Index from "./Pages/Index/Index";
import PageTransition from "./Components/Transitions/PageTransition";
import Moonoz from "./Pages/Moonoz/Moonoz";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
        <NavBar />
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<Error />}></Route>
          <Route
            index
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          ></Route>
          <Route
            path="/About"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          ></Route>
          <Route
            path="/Contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          ></Route>
          <Route
            path="/Projects"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          ></Route>
          <Route
            path="/Menu"
            element={
              <PageTransition>
                <Index />
              </PageTransition>
            }
          ></Route>
          <Route
            path="/Moonoz"
            element={
              <PageTransition>
                <Moonoz />
              </PageTransition>
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
