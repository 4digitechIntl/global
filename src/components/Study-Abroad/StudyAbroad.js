import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./studyabroad.css";
import usa from "../../assests/images/usa.jpg";


const StudyAbroad = () => {
  return (
    <section className="py-5" id="study">
        <Container p-0>
        <h1 className="fw-bold">Study Abroad.</h1>
        <p className="fw-bold fs-5">Start your overseas education journey with the best overseas education consultant.</p>
            <Row className="d-flex align-items-center">
                <div className="col-sm-6 col-md-4">
                    <div className="list-card">
                        <img className="list-card-img" src={usa} alt="usa"/>
                        <p className="fw-bold fs-5 py-2 mb-0">Study in USA</p>
                        <p className="lh-sm card-text">Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.</p>
                        <a className="btn-hero" href='/#about'>
                        <span>Learn More</span>
                        </a>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="list-card">
                        <img className="list-card-img" src={usa} alt="usa"/>
                        <p className="fw-bold fs-5 py-2 mb-0">Study in USA</p>
                        <p className="lh-sm card-text">Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.</p>

                            <a className="btn-hero" href='/#about'>
                            <span>Learn More</span>
                            </a>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                <div className="list-card">
                        <img className="list-card-img" src={usa} alt="usa"/>
                        <p className="fw-bold fs-5 py-2 mb-0">Study in USA</p>
                        <p className="lh-sm card-text">Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.</p>

                        <a className="btn-hero" href='/#about'>
                        <span>Learn More</span>
                        </a>
                </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="list-card">
                        <img className="list-card-img" src={usa} alt="usa"/>
                        <p className="fw-bold fs-5 py-2 mb-0">Study in USA</p>
                        <p className="lh-sm card-text">Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.</p>

                        <a className="btn-hero" href='/#about'>
                        <span>Learn More</span>
                        </a>
                    </div>
                </div>
            </Row>
        </Container>
    </section>
  );
};

export default StudyAbroad;

