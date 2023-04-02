import React, { useRef } from "react";
import { Container } from "reactstrap";
import Logo from "../../assests/images/Logo.png";
import "./header.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import VideocamIcon from '@mui/icons-material/Videocam';
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
const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <nav className="navbar navbar-expand-md p-0 info-nav">
        <div className="container d-flex">
          <a href="mailto:info@globalmoon.edu.np" className="m-2">
            <EmailIcon />
            globalmoon.edu@gmail.com
          </a>
          <a
            href="https://www.google.com/maps/place/Global+Moon+Consultancy+Pvt.Ltd./@27.7029231,85.3197507,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19710582c1ed:0xf44e166229c0551a!8m2!3d27.7029184!4d85.3219394!16s%2Fg%2F11g1pncjdz"
            target="_blank"
            className="m-2"
          >
            <RoomIcon />
            Putalisadak, Kathmandu, Nepal
          </a>
          <div className="social-links">
            <a href="https://twitter.com/globalmoon_edu" target="_blank">
              <TwitterIcon className="m-2" />
            </a>
            <a href="https://www.facebook.com/globalmoon.education" target="_blank">
              <FacebookIcon className="m-2" />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <LinkedInIcon className="m-2" />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <WhatsAppIcon className="m-2" />
            </a>
            <a href="https://www.instagram.com/globalmoon.consultancy" target="_blank">
              <InstagramIcon className="m-2" />
            </a>
            <a href="https://www.youtube.com/@globalmoonconsultancypvt.l5161" target="_blank">
              <YouTubeIcon className="m-2" />
            </a>
          </div>
        </div>
      </nav>
      <Container>
        <hr className="m-0" />
      </Container>
      <nav className="navbar navbar-expand-md  py-3 d-flex justify-content-between">
        <Container>
          <div className="logo">
            <Link to='/'>
            <img src={Logo} alt="Logo" height={60} />
            </Link>
          </div>
          <div className="nav align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                <li className="nav__item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav__item">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="nav__item">
                  <Link to='/studyabroadcountries'>Study Abroad 
                  <ArrowDropDownIcon></ArrowDropDownIcon>
                  </Link>
                  <div className="dropdown">
                    <div className="row">
                      <div className="col-12 px-4">
                        <ul className="m-0 p-0">
                          <li className="drop_menu">
                            <Link to="/studyabroad/japan" className="drop_menu_a">
                              Study in Japan.
                            </Link>
                          </li>
                          <li className="drop_menu">
                            <Link to="/studyabroad/australia" className="drop_menu_a">
                              Study in Australia.
                            </Link>
                          </li>
                          <li className="drop_menu">
                            <Link to="/studyabroad/uk" className="drop_menu_a">
                              Study in UK.
                            </Link>
                          </li>
                          <li className="drop_menu">
                            <Link to="/studyabroad/denmark" className="drop_menu_a">
                              Study in Denmark.
                            </Link>
                          </li>
                          <li className="drop_menu">
                            <Link to="/studyabroad/canada" className="drop_menu_a">
                              Study in Canada.
                            </Link>
                          </li>
                          <li className="drop_menu">
                            <Link to="/studyabroad/korea" className="drop_menu_a">
                              Study in Korea.
                            </Link>
                          </li>
                          <li className="drop_menu">
                            <Link to="/studyabroad/usa" className="drop_menu_a">
                              Study in USA.
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <div className="col-4">
                        <ul className="m-0 p-0">
                          <li className="drop_menu">
                            <a href="#" className="drop_menu_a">
                              Study in UK.
                            </a>
                          </li>
                          <li className="drop_menu">
                            <a href="#" className="drop_menu_a">
                              Study in Canada.
                            </a>
                          </li>
                          <li className="drop_menu">
                            <a href="#" className="drop_menu_a">
                              Study in Ireland.
                            </a>
                          </li>
                          <li className="drop_menu">
                            <a href="#" className="drop_menu_a">
                              Study in Korea.
                            </a>
                          </li>
                          <li className="drop_menu">
                            <a href="#" className="drop_menu_a">
                              Study in France.
                            </a>
                          </li>
                          <li className="drop_menu">
                            <a href="#" className="drop_menu_a">
                              Study in Finland.
                            </a>
                          </li>
                          <li className="drop_menu">
                            <a href="#" className="drop_menu_a">
                              Study in Germany.
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <ul className="m-0 p-0">
                          <li className="drop_menu">
                            <a href="#" className="drop_menu_a">
                              Study in Malta.
                            </a>
                          </li>
                          <li className="drop_menu">
                            <a href="#" className="drop_menu_a">
                              Study in Dubai.
                            </a>
                          </li>
                          <li className="drop_menu">
                            <a href="#" className="drop_menu_a">
                              Study in New Zealand.
                            </a>
                          </li>
                          <li className="drop_menu">
                            <a href="#" className="drop_menu_a">
                              Study in China.
                            </a>
                          </li>
                          <li className="drop_menu">
                            <a href="#" className="drop_menu_a">
                              Study in Bangladesh.
                            </a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in Spain.</a>
                          </li>
                        </ul>
                      </div> */}
                    </div>  
                  </div>
                </li>
                <li className="nav__item">
                  <a href="#test">Test Preparation
                  <ArrowDropDownIcon></ArrowDropDownIcon></a>
                <div className="dropdown" style={{transform: 'translate(-20px, 0px)'}}>
                    <div className="row">
                      <div className="col-12 px-4">
                        <ul className="m-0 p-0">
                          <li className="drop_menu">
                            <Link to='/preparation' className="drop_menu_a">IELTS</Link>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">PTE</a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">NAT(N5 & N4)</a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">JLPT</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav__item">
                  <a href="#">Important Links
                  <ArrowDropDownIcon></ArrowDropDownIcon></a>
                <div className="dropdown" style={{transform: 'translate(-20px, 0px)'}}>
                    <div className="row">
                      <div className="col-12 px-4">
                        <ul className="m-0 p-0">
                        {importantLinks.map((item, index) => (
                          <li className="drop_menu">
                            <Link to={item.url} className="drop_menu_a">{item.display}</Link>
                          </li>
                        ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                
                <li className="nav__item nav-cta">
                  <a href="#contact">Contact Us</a>
                </li>
                
                <li className="nav__item nav-cta" style={{background: "#f37224", padding: "10px", borderRadius:"30px"}}>
                  <Link to="/virtual-councelling" style={{color: "#FFFFFF",display:"flex",alignItems:"center"}}>
                    <VideocamIcon></VideocamIcon>
                    Virtual Meeting</Link>
                </li>

              </ul>
            </div>
          </div>
          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
