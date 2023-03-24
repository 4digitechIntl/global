import React from "react";
import Home from "./pages/Home";
import About from "./pages/about";
import Studyin from "./pages/study-abroad";
import Preparation from "./pages/preparation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/studyabroad/:countryname" element={<Studyin />} /> */}
        <Route path="/studyabroad" element={<Studyin />} />
        <Route path="/preparation" element={<Preparation />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
