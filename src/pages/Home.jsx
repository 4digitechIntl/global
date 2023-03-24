import React, { Fragment, useState } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";

import Courses from "../components/Courses-section/Courses";
// import ChooseUs from "../components/Choose-us/ChooseUs";

import Testimonials from "../components/Testimonial/Testimonials";

// import Newsletter from "../components/Newsletter/Newsletter";
import { Close } from "@mui/icons-material";
import { Dialog, DialogContent } from "@mui/material";
import DialogImg from "../assests/images/modal.jpg";
import ContactUs from "../components/Contact-us/ContactUs";
import Footer from "../components/Footer/Footer";
import StudyAbroad from "../components/Study-Abroad/StudyAbroad";
import Welcome from "../components/Welcome-msg/Welcome";

const Home = () => {
  const [open, setOpen] = useState(true);

  return (
    <Fragment>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent style={styles.container}>
          <img src={DialogImg} style={styles.img} />
          <Close style={styles.icon} onClick={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
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

const styles = {
  container: {
    padding: 0,
  },
  img: { width: "100%", height: "100%" },
  icon: { position: "absolute", top: "2%", right: "2%" },
};

export default Home;
