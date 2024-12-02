import React from "react";
import "./App.scss";
import SideMenu from "./Components/sideMenu/SideMenu";
import NavBar from "./Components/navBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
        <AnimatedRoutes />
  );
};

export default App;
