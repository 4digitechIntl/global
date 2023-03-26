import React from "react";
import Home from "./pages/Home";
import About from "./pages/about";
import Schedule from "./pages/schedule-vm";
import Studyin from "./pages/study-abroad";
import Preparation from "./pages/preparation";
import StudyAbroadCountries from "./pages/studyabroadcountries";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/studyabroad/:countryname" element={<Studyin />} />
          <Route path="/studyabroad" element={<Studyin />} />
          <Route path="/preparation" element={<Preparation />} />
          <Route path="/virtual-councelling" element={<Schedule />} />
          <Route path="/studyabroadcountries" element={<StudyAbroadCountries />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}
export default App;
