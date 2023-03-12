import React, { useRef } from "react";
import { Container } from "reactstrap";
import Logo from "../../assests/images/Logo.png";
import "./header.css";
import { Link } from "react-router-dom";

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
      <nav className="navbar navbar-expand-md  py-3 d-flex justify-content-between">
        <Container className="container p-0">
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
