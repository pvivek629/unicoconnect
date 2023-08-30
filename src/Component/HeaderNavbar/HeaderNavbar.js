import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Dropdown } from "react-bootstrap";
import "./HeaderNavbar.css";
import Button from 'react-bootstrap/Button';

function HeaderNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDrop, setShowDrop] = useState(false);

  return (
    <div>
      <Navbar expand="lg" className=" navbarheader">
        <Container>
        <Navbar.Brand href="#home">
            <img
              src="	https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62a443e6434916672ae8ad5f_BLACK%20LOGO.svg"
              width="160"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Dropdown
                onMouseLeave={() => setShowDropdown(false)}
                onMouseOver={() => setShowDropdown(true)}
                
              >
                <Dropdown.Toggle className="main-style" id="dropdown-basic">
                  Services
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdownback" show={showDropdown}>
                  <Dropdown.Item href="#/action-1">Mobile App Development</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Web Development
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    UI/UX Design
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-4">
                    Ai Development
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-5">
                    Tech Consulting
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown
                onMouseLeave={() => setShowDrop(false)}
                onMouseOver={() => setShowDrop(true)}
                
              >
                <Dropdown.Toggle className="main-style" id="dropdown-basic">
                  Hire Developers
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdownback" show={showDrop}>
                  <div className="d-lg-flex dropdownflow">
                      <div>
                        <Dropdown.Item href="#/action-1">Mobile App Developer</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Node JS
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Angular JS
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-4">
                          Flutter
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-5">
                          Laravel
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-5">
                          Webflow
                        </Dropdown.Item>
                      </div>
                      <div>
                        <Dropdown.Item href="#/action-1">WeWeb</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Xano
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Wordpress
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-4">
                          Shopify
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-5">
                          Reactjs
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-5">
                          ChatGPT
                        </Dropdown.Item>
                      </div>
                      <div>
                        <Dropdown.Item href="#/action-1">Bubble</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Whisper
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          UI/UX Design
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-4">
                          Website Developer
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-5">
                          LainChain Developer
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-5">
                          Flutterflow
                        </Dropdown.Item>
                      </div>
                  </div>
                  
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link className="navbarheaderlink" href="#home">Case Study</Nav.Link>
              <Nav.Link className="navbarheaderlink" href="#link">Pricing Plan</Nav.Link>
              <Nav.Link className="navbarheaderlink" href="#home">No Code Tools</Nav.Link>
              <Nav.Link className="navbarheaderlink" href="#link">About Us</Nav.Link>
              <div className="navbarheadingbutton">
                <Nav.Link className="navbarheaderbutton" href="#link">Get in Touch</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderNavbar;
