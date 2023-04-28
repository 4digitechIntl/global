import React from "react";
import "./testimonial.css";
import { Container } from "reactstrap";
import Slider from "react-slick";

import airplane from "../../assests/images/airplane.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <section className="py-5 global-primary relative">
      <div className="icon-bg">
        <img src={airplane} alt="airplane"></img>
      </div>
      <Container>
      <h1 className="fw-bold">Testinomials.</h1>
        <p className="fw-bold fs-5">Hear From people who got here before you.</p>
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              {/* <div className="testimonial__img w-50">
                <img src={img} alt="" className="testimonial-img" />
              </div> */}

              <div className="testimonial__content w-100">
                {/* <h2 className="mb-4">Our Students Voice</h2> */}

                <Slider {...settings}>
                
                    <div className="single__testimonial">
                        <h6 className="mb-3 fw-bold">
                          Excellent course of materials
                        </h6>
                        <p className="lh-base">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Facilis saepe id voluptas molestiae. Aperiam corrupti
                          voluptas earum at molestiae neque!
                        </p>
                        <div className="student__info mt-4">
                          <h6 className="fw-bold">Jhon Doe</h6>
                          <p>California, United State</p>
                        </div>
                    </div>
              

                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p className="lh-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis saepe id voluptas molestiae. Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
               

        
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p className="lh-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis saepe id voluptas molestiae. Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
              
                </Slider>
              </div>
            </div>
      </Container>
    </section>
  );
};

export default Testimonials;
