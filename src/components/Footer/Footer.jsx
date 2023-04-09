import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import revert from "../../assests/images/whitebglogo.jpg";
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

const importantLinks=[
  {
    display: "Online NOC Application",
    url: "https://noc.moest.gov.np/login",
  },
  {
    display: "British Council IELTS",
    url: "https://www.britishcouncil.org.np/exam/ielts/dates-fees-locations",
  },
  {
    display: "IDP IELTS",
    url: "https://ielts.idp.com/nepal/test-dates/kathmandu",
  },
  {
    display: "PTE Date and Booking Nepal",
    url: "https://www.pearsonpte.com/articles/how-to-book-your-pte-academic-exam",
  },
  {
    display: "NAT Center, Nepal",
    url: "https://kathmandu.nat-test.jp/",
  },
  {
    display: "JLPT",
    url: "https://jlpt.org.np/",
  },
  {
    display: "JCERT Nepal",
    url: "https://j-cert.mtroyalgroups.com/",
  },
  {
    display: "JLCT Nepal",
    url: "https://jlct.jp/e/index.html",
  },
  {
    display: "VFS Global",
    url: "https://visa.vfsglobal.com/npl/en/ita/book-an-appointment",
  },
  {
    display: "Embassy of Japan",
    url: "https://www.np.emb-japan.go.jp/itprtop_en/index.html",
  },
  {
    display: "Embassy of Australia",
    url: "https://nepal.embassy.gov.au/",
  },
  {
    display: "Local Government, Nepal",
    url: "https://sthaniya.gov.np/gis/website/",
  },
  {
    display: "PAN Registration",
    url: "https://taxpayerportal.ird.gov.np/taxpayer/app.html",
  },
  {
    display: "COVID Vaccine Registration",
    url: "https://vaccine.mohp.gov.np/",
  },
  {
    display: "Department of Passport, Nepal",
    url: "https://nepalpassport.gov.np/",
  },
  {
    display: "Education Consultancy Organization, Nepal",
    url: "https://fecon.org.np/",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4 relative">
            <div className="vr-custom"></div>
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
          <Col lg="3" md="6" className="mb-4 relative">
            <div className="vr-custom vr-custom-2"></div>
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

          <Col lg="3" md="6" className="mb-4 relative">
            <div className="vr-custom"></div>
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
            <div className="vr-custom"></div>
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
        {/* <hr className="c-white"></hr>
        <div className="imp-links">
        <h6 className="fw-bold">Important Links</h6>
                <ul className="border-0 ps-0">
                  {importantLinks.map((item, index) => (
                    <li className="imp-li">
                      <a href={item.url} target="_blank">{item.display}</a>
                      <span className="px-3 c-white">|</span>
                    </li>
                  ))} 
                </ul> 
        </div>     */}
        <hr className="c-white"></hr>
        <div className="copyright d-flex justify-content-center">Copyright © 2023 Global Moon Consultancy Pvt. Ltd.</div>
      </Container>
    </footer>
  );
};

export default Footer;
