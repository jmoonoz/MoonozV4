import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Project";
import Moonoz from "../Pages/Moonoz/Moonoz";
import Error from "../Pages/Error/Error";
import Index from "../Pages/Index/Index";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname} >
        <Route path="*"  element={<Error />}></Route>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Index" element={<Index />}></Route>
        <Route path="/Moonoz" element={<Moonoz />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
