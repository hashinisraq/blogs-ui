import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "./images/logo.png";
import search from "./images/search.png";
import "./Home.css";


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Container className="header-container">
                    <Nav className="social-container">
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav.Link href="https://facebook.com">
                                <FontAwesomeIcon icon={faFacebookF} className="icons" style={{ "color": "#175BEB" }} />
                            </Nav.Link>
                            <Nav.Link href="https://twitter.com">
                                <FontAwesomeIcon icon={faTwitter} className="icons" style={{ "color": "#1DA1F2" }} />
                            </Nav.Link>
                            <Nav.Link href="https://instagram.com">
                                <FontAwesomeIcon icon={faInstagram} className="icons" style={{ "color": "#F248BD" }} />
                            </Nav.Link>
                            <Nav.Link href="https://linkedin.com">
                                <FontAwesomeIcon icon={faLinkedin} className="icons" style={{ "color": "#1DA1F2" }} />
                            </Nav.Link>
                        </Navbar.Collapse>
                    </Nav>

                    <Navbar.Brand href="/home">
                        <img src={logo} alt="logo" width="80rem" />
                    </Navbar.Brand>


                    <Button className="search-btn">
                        <img src={search} alt="search icon" srcset="" width="20rem" />
                    </Button>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;