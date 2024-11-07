import React from "react";
import { AnimatePresence } from "framer-motion";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Project";
import Moonoz from "../Pages/Moonoz/Moonoz";
import Error from "../Pages/Error/Error";

function AnimatedRoutes() {
  const location = useLocation();
  console.log(location);
  return (
    <AnimatePresence mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path="*" element={<Error />}></Route>
        <Route index element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Moonoz" element={<Moonoz />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
