import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import AboutUs from "../../pages/About";
const Container = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} /> */}
      </Routes>
    </Router>
  );
};

export default Container;
