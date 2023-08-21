import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import ResponsiveNavbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <ResponsiveNavbar/>
      <Main/>
      <Footer/>
    </Router>
  );
}

export default App;
