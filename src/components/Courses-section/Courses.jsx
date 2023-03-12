import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./courses.css";
import stroke from "../../assests/images/stroke.jpg";
const courses = [  
  {
    heading: "Ilets",
    content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
    img:"",
    href:"/courses/ilets",
  },
  {
    heading: "Tofels",
    content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
    img:"",
    href:"/courses/ilets",
  },

  {
    heading: "SAT",
    content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
    img:"",
    href:"/courses/ilets",
  },

  {
    heading: "N-5",
    content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
    img:"",
    href:"/courses/ilets",
  },
];

const Courses = () => {
  return (
    <section className="py-5" id="study-abroad">
        <Container p-0>
        <h1 className="fw-bold">Courses we provide.</h1>
        <p className="fw-bold fs-5">Start your overseas education journey with the best available courses.</p>
            <Row className="d-flex align-items-center">
              {
                courses.map((item, index) => (             
                  <div className="col-lg-3 col-sm-12 col-md-4">
                      <div className="list-card">
                        <div className="relative">
                          <p className="fw-bold fs-1 py-2 mb-0 text-center d-center">{item.heading}.</p>
                          <img src={stroke} alt='brush stroke' className="stroke" />
                        </div>
                          <p className="lh-sm card-text">{item.content}</p>
                          <a className="btn-hero" href='/#about'>
                          <span>Learn More</span>
                          </a>
                      </div>
                  </div>
                ))
              }  
            </Row>
        </Container>
    </section>
  );
};

export default Courses;

