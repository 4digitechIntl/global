import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./courses.css";
import stroke from "../../assests/images/stroke.jpg";
const courses = [  
  {
    heading: "IELTS",
    content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
    img:"",
    href:"/courses/ilets",
  },
  {
    heading: "PTE",
    content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
    img:"",
    href:"/courses/ilets",
  },

  {
    heading: "NAT(N5 & N4)",
    content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
    img:"",
    href:"/courses/ilets",
  },

  {
    heading: "JLPT",
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
            <Row className="d-flex align-items-center pt-4">
              {
                courses.map((item, index) => (             
                  <div className="col-sm-6 col-md-6 col-lg-3 my-3">
                    <div class="ag-courses_item">
                      <a href={item.href} class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title">
                          {item.heading}.
                        </div>
                        <div class="ag-courses-item_date-box">
                          <span class="ag-courses-item_date">
                            Learn More
                          </span>
                        </div>
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

