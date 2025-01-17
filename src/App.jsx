import React, { useState } from "react";
import "./App.scss";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Project";
import Contact from "./Pages/Contact/Contact";
import Error from "./Pages/Error/Error";
import NavBar from "./Components/navBar/NavBar";
import Index from "./Pages/Index/Index";

const App = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <AnimatePresence >
        <NavBar toggleMenu={toggleMenu} />
        {isMenuOpen && <Index toggleMenu={toggleMenu} />}
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<Error />}></Route>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
        </Routes>
     
      </AnimatePresence>
    </div>
  );
};

export default App;
