import React from 'react'
import { Navbar,Container, Nav } from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';

import logo from "../../img/travel-gfd4299cbb_1280.jpg"

import gith from "../../img/github-g458af62a0_1280.png"

//?react-bootstrap den Navbar yapisini aldik


  //!burada Link yada Navlink ile yol alıp gidilen Home ve About sayfası olacak, ek olarak tıklandığında  github adresinize gidilen bir link te yazınız

const MyNavbar = () => {



  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Link to="/">
          <img src={logo} alt="" className="logo w-25 border " />
        </Link>

        <h1>THE WORLD</h1>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          <NavLink
            className="nav-link "
            to="/"
            style={({ isActive }) => ({
              backgroundColor: isActive && "orange",
            })}
          >
            Home
          </NavLink>

          <NavLink
            className="nav-link"
            to="/About"
            style={({ isActive }) => ({
              backgroundColor: isActive && "orange",
            })}
          >
            About
          </NavLink>
          <div className="d-flex">
            <a
              href="https://github.com/clarusway/clarusway-FS-DE-05-TR"
              className="nav-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gith} alt="" className="kedi" />
              Github
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar