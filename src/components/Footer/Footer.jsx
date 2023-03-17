import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import revert from "../../assests/images/revert-logo.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About US",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },

  {
    display: "Contact Us",
    url: "#",
  },
];

const footerStudyAbroad = [
  {
    display: "Study in Japan",
    url: "#",
  },
  {
    display: "Study in Canada",
    url: "#",
  },

  {
    display: "Study in Denmark",
    url: "#",
  },

  {
    display: "Study in USA",
    url: "#",
  },
];

const footerTestPreparation = [
  {
    display: "IELTS",
    url: "#",
  },
  {
    display: "TOEFL",
    url: "#",
  },

  {
    display: "PTE",
    url: "#",
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
                  <LinkedInIcon fontSize="large"/>
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
                  <FacebookIcon fontSize="large"/>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <TwitterIcon fontSize="large"/>
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
                  <a href={item.url}>{item.display}</a>
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
                  <a href={item.url}>{item.display}</a>
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
                  <a href={item.url}>{item.display}</a>
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
