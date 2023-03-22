import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";

import Courses from "../components/Courses-section/Courses";
// import ChooseUs from "../components/Choose-us/ChooseUs";

import Testimonials from "../components/Testimonial/Testimonials";

// import Newsletter from "../components/Newsletter/Newsletter";
import ContactUs from "../components/Contact-us/ContactUs";
import Footer from "../components/Footer/Footer";
import StudyAbroad from "../components/Study-Abroad/StudyAbroad";
import Welcome from "../components/Welcome-msg/Welcome";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Welcome />
      <StudyAbroad />
      {/* <Test Preparation /> */}
      {/* <Countries /> */}
      <Courses />
      <Testimonials />
      <ContactUs />
      <Footer />
    </Fragment>
  );
};

export default Home;
