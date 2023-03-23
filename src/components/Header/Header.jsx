import React, { useRef } from "react";
import { Container } from "reactstrap";
import Logo from "../../assests/images/Logo.png";
import "./header.css";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
            <a href="https://www.google.com/maps/place/Global+Moon+Consultancy+Pvt.Ltd./@27.7029231,85.3197507,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19710582c1ed:0xf44e166229c0551a!8m2!3d27.7029184!4d85.3219394!16s%2Fg%2F11g1pncjdz"  target="_blank" className="m-2">
              <RoomIcon />
              Putalishadak, Kathmandu, Nepal
            </a>
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
              <a href="https://www.linkedin.com" target="_blank">
                <InstagramIcon  className="m-2"/>
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <YouTubeIcon  className="m-2"/>
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

                <li className="nav__item">
                  <Link to='/'>Home</Link>
                </li>
                <li className="nav__item">
                  <Link to='/about'>About Us</Link>
                </li>
                <li className="nav__item">
                  <Link to='/'>Study Abroad 
                  <ArrowDropDownIcon></ArrowDropDownIcon>
                  </Link>
                  <div className="dropdown">
                    <div className="row">
                      <div className="col-4">
                        <ul className="m-0 p-0">
                          <li className="drop_menu">
                            <Link to='/studyabroad' className="drop_menu_a">Study in Japan.</Link>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in Australia.</a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in USA.</a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in Denmark.</a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in India.</a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in Sweden.</a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in Portugal.</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <ul className="m-0 p-0">
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in UK.</a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in Canada.</a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in Ireland.</a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in Korea.</a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in France.</a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in Finland.</a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in Germany.</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <ul className="m-0 p-0">
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in Malta.</a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in Dubai.</a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in New Zealand.</a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in China.</a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in Bangladesh.</a>
                          </li>
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">Study in Spain.</a>
                          </li>
                        </ul>
                      </div>
                    </div>  
                  </div>
                </li>
                <li className="nav__item">
                  <Link to='/'>Test Preparation
                  <ArrowDropDownIcon></ArrowDropDownIcon></Link>
                <div className="dropdown" style={{transform: 'translate(-20px, 0px)'}}>
                    <div className="row">
                      <div className="col-12 px-4">
                        <ul className="m-0 p-0">
                          <li className="drop_menu">
                            <a href='#' className="drop_menu_a">IELTS</a>
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
                <li className="nav__item nav-cta">
                  <a href='#contact'>Contact Us</a>
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
