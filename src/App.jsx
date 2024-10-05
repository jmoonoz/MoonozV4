import React from "react";
import "./App.scss";
// import { BrowserRouter as Router  } from "react-router-dom";
import SideMenu from "./Components/sideMenu/SideMenu";
import NavBar from "./Components/navBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
      <SideMenu />
      <Footer />
    </>
  );
};

export default App;
