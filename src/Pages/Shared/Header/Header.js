import React, { useState } from "react";
import { Button, Container, Form, InputGroup, Modal, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "./images/logo.png";
import search from "./images/search.png";
import "./Home.css";


const Header = () => {
    // Search (Modal)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container className="header-container">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav>
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
                    </Nav>

                    <Navbar.Brand href="/home">
                        <img src={logo} alt="logo" width="100rem" />
                    </Navbar.Brand>


                    <Button className="search-btn" onClick={handleShow}>
                        <img src={search} alt="search icon" srcSet="" width="20rem" />
                    </Button>
                </Container>
            </Navbar>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Container style={{ "backgroundColor": "white", "color": "black", "borderRadius": "10px" }}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">Enter your search</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Type to start your search"
                                aria-label="search"
                                aria-describedby="basic-addon2"
                                style={{ "border": "1px solid #FF4C60" }}
                            />
                            <Button variant="outline-danger" id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Container>
            </Modal>
        </div>
    );
};

export default Header;