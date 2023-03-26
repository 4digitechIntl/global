import React, { Fragment } from "react";
import Header from "../components/Header/Header"

import AboutUs from "../components/About-us/AboutUs";

import Testimonials from "../components/Testimonial/Testimonials";

import ContactUs from "../components/Contact-us/ContactUs";
import Footer from "../components/Footer/Footer";

const about = () => {
  return (
    <Fragment>
      <Header />
      <AboutUs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </Fragment>
  );
};

export default about;
