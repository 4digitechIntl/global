import React from "react";
import { Container, Row } from "reactstrap";
import "./studyabroad.css";
import usa from "../../assests/images/usa.jpg";
import japan from "../../assests/images/japan.jpg";
import australia from "../../assests/images/australia.jpg";


const StudyAbroad = () => {
  return (
    <section className="py-5" id="study">
        <Container p-0>
        <h1 className="fw-bold">Study Abroad.</h1>
        <p className="fw-bold fs-5">Start your overseas education journey with the best overseas education consultant.</p>
            <Row className="d-flex align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className = "card">
                        <img src={usa} alt="" className="card-img" />
                        <div className="card-content">
                            <div className="card-overlay"></div>
                        <h2 className="card-h2">
                            Study in USA
                        </h2>
                        <p className="card-p">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                        </p>
                        <a className="btn-hero card-button" href='/#about'>
                                <span>Learn More</span>
                                </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className = "card">
                        <img src={usa} alt="" className="card-img" />
                        <div className="card-content">
                            <div className="card-overlay"></div>
                        <h2 className="card-h2">
                            Study in USA
                        </h2>
                        <p className="card-p">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                        </p>
                        <a className="btn-hero card-button" href='/#about'>
                                <span>Learn More</span>
                                </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className = "card">
                        <img src={japan} alt="" className="card-img" />
                        <div className="card-content">
                            <div className="card-overlay"></div>
                        <h2 className="card-h2">
                            Study in USA
                        </h2>
                        <p className="card-p">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                        </p>
                        <a className="btn-hero card-button" href='/#about'>
                                <span>Learn More</span>
                                </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className = "card">
                        <img src={australia} alt="" className="card-img" />
                        <div className="card-content">
                            <div className="card-overlay"></div>
                        <h2 className="card-h2">
                            Study in USA
                        </h2>
                        <p className="card-p">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                        </p>
                        <a className="btn-hero card-button" href='/#about'>
                                <span>Learn More</span>
                                </a>
                        </div>
                    </div>
                </div>
                {/* <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="list-card ">
                        <img className="list-card-img" src={japan} alt="japan"/>
                        <p className="fw-bold fs-5 py-2 mb-0">Study in japan</p>
                        <p className="lh-sm card-text">Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.</p>

                            <a className="btn-hero" href='/#about'>
                            <span>Learn More</span>
                            </a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="list-card ">
                        <img className="list-card-img" src={australia} alt="australia"/>
                        <p className="fw-bold fs-5 py-2 mb-0">Study in australia</p>
                        <p className="lh-sm card-text">Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.</p>

                        <a className="btn-hero" href='/#about'>
                        <span>Learn More</span>
                        </a>
                </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="list-card ">
                        <img className="list-card-img" src={usa} alt="usa"/>
                        <p className="fw-bold fs-5 py-2 mb-0">Study in USA</p>
                        <p className="lh-sm card-text">Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.</p>

                        <a className="btn-hero" href='/#about'>
                        <span>Learn More</span>
                        </a>
                    </div>
                </div> */}
            </Row>
        </Container>
    </section>
  );
};

export default StudyAbroad;

