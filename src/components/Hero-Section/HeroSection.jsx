import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./hero-section.css";
import Carousel from 'react-bootstrap/Carousel';
// import japan from "../../assests/images/japan.jpg";
import banner1 from "../../assests/images/banner1.jpeg";
import banner2 from "../../assests/images/banner2.jpeg";
import banner3 from "../../assests/images/banner3.jpeg";
import banner4 from "../../assests/images/banner4.jpeg";
import banner5 from "../../assests/images/banner5.jpeg";
import stdone from "../../assests/images/stdone.png";
import usa from "../../assests/images/usa.jpg";
// import australia from "../../assests/images/australia.jpg";

import carousel_one from "../../assests/images/carousel_one.jpeg";

const HeroSection = () => {
  return (
    <section>
        <Carousel>
          <Carousel.Item>
            {/* <span className="overlay"/> */}
            <img
              className="d-block w-100 slider-img"
              src={banner1}
              alt="Second slide"
            />
              {/* <Row className="hero-banner">
                <Col classname="col-img">
                  <img className="hero-holder" src={stdone} alt="student" />
                </Col>
                <Col className="my-auto px-5 col-text ">
                  <h3 className="hero-header">The future you imagine is closer than you think.</h3>
                  <p className="hero-sub">Our mere ambition lies together with your success. Out entire team is dedicatedly
                    committed to serve the best with our nitty-gritty services and regular conversation with
                    you.
                  </p>
                <a className="btn-hero" href='#contact'>
                  <span>Contact Us</span>
                </a>
                </Col>
              </Row> */}
          </Carousel.Item>
          <Carousel.Item>
            {/* <span className="overlay"/> */}
            <img
              className="d-block w-100 slider-img"
              src={banner2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            {/* <span className="overlay"/> */}
            <img
              className="d-block w-100 slider-img"
              src={banner3}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            {/* <span className="overlay"/> */}
            <img
              className="d-block w-100 slider-img"
              src={banner4}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            {/* <span className="overlay"/> */}
            <img
              className="d-block w-100 slider-img"
              src={banner5}
              alt="Second slide"
            />
          </Carousel.Item>
        
        </Carousel>
    </section>
  );
};

export default HeroSection;
      