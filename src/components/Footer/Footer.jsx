import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import revert from "../../assests/images/revert-logo.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.css";
import { WhatsApp } from "@mui/icons-material";
import YouTube from "@mui/icons-material/YouTube";

const footerQuickLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About US",
    url: "/about",
  },

  {
    display: "Test Preparation",
    url: "/preparation",
  },

  {
    display: "Virtual Meeting",
    url: "/virtual-councelling",
  },

  {
    display: "Study Abroad",
    url: "/tudyabroadcountries",
  },
];

const footerStudyAbroad = [
  {
    display: "Study in Japan",
    url: "/studyabroad/japan",
  },
  {
    display: "Study in Australia",
    url: "/studyabroad/australia",
  },

  {
    display: "Study in UK",
    url: "/studyabroad/uk",
  },

  {
    display: "Study in Denmark",
    url: "/studyabroad/denmark",
  },

  {
    display: "Study in Canada",
    url: "/studyabroad/canada",
  },

  {
    display: "Study in Korea",
    url: "/studyabroad/korea",
  },

  {
    display: "Study in USA",
    url: "/studyabroad/usa",
  },
];

const footerTestPreparation = [
  {
    display: "IELTS",
    url: "/preparation",
  },
  {
    display: "PTE",
    url: "/preparation",
  },

  {
    display: "NAT(N5 & N4)",
    url: "/preparation",
  },

  {
    display: "JLPT",
    url: "/preparation",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <div className="logo pb-3">
                <img src={revert} alt="Logo" height={60}/>
            </div>
            <div className="follows">
              <h3 className="mb-0 fw-bold py-4">Let's socialize</h3>
              <span>
                {" "}
                <a href="facebook.com">
                  <TwitterIcon fontSize="large"/>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <FacebookIcon fontSize="large"/>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <LinkedInIcon fontSize="large"/>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <WhatsApp fontSize="large"/>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <InstagramIcon fontSize="large"/>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <YouTube fontSize="large"/>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Study Abroad</h6>
            <ListGroup className="link__list">
              {footerStudyAbroad.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Test Preparation</h6>
            <ListGroup className="link__list">
              {footerTestPreparation.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
        <hr className="c-white"></hr>
        <div className="copyright d-flex justify-content-center">Copyright © 2023 Global Moon Consultancy</div>
      </Container>
    </footer>
  );
};

export default Footer;
