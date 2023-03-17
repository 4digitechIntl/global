import React, { useRef } from "react";
import { Container } from "reactstrap";
import Logo from "../../assests/images/Logo.png";
import "./header.css";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About Us",
    url: "/about",
  },

  {
    display: "Study Abroad",
    url: "/#study",
  },
  {
    display: "Test Preparation",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "#contact",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <nav className="navbar navbar-expand-md">
          <div className="container d-flex justify-content-between">
            <a href="mailto:info@globalmoon.edu.np" className="fw-bold">
              <EmailIcon />
              info@globalmoon.com.np
              </a>
            <a href="https://www.google.com/maps/place/Global+Moon+Consultancy+Pvt.Ltd./@27.7029231,85.3197507,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19710582c1ed:0xf44e166229c0551a!8m2!3d27.7029184!4d85.3219394!16s%2Fg%2F11g1pncjdz"  target="_blank">
              <RoomIcon />
              Putalishadak, Kathmandu</a>
            <div className="social-links">
              <a href="https://www.twitter.com" target="_blank">
                <TwitterIcon  className="m-2"/>
              </a>
              <a href="https://www.facebook.com" target="_blank">
               <FacebookIcon  className="m-2"/>
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <LinkedInIcon  className="m-2"/>
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <WhatsAppIcon  className="m-2"/>
                </a>
            </div>
          </div>
      </nav>
      <Container><hr className="m-0" /></Container>
      <nav className="navbar navbar-expand-md  py-3 d-flex justify-content-between">
        <Container>
          <div className="logo">
            <img src={Logo} alt="Logo" height={60} />
          </div>
          <div className="nav align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <Link to={item?.url}>{item?.display}</Link>
                  </li>
                ))}
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
