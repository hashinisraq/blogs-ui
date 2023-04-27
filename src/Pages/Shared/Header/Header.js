import React, { useState } from "react";
import { Button, Container, Form, InputGroup, Modal, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router";
import logo from "./images/logo.png";
import search from "./images/search.png";
import "./Header.css";


const Header = () => {
    // Search (Modal)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        navigate(`/searchResult/${searchTerm}`);
    };


    return (
        <div style={{ backgroundColor: "#F9F9FE" }}>
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
                <Container style={{ "backgroundColor": "white", "color": "#4B4870", "borderRadius": "10px" }}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">Enter your search</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Travel Technology Music Lifestyle Health"
                                aria-label="search"
                                aria-describedby="basic-addon2"
                                value={searchTerm}
                                onChange={handleInputChange}
                                style={{ "border": "1px solid #4B4870" }}
                            />
                            <Button onClick={handleSubmit} style={{ backgroundColor: "#4B4870" }} id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button style={{ backgroundColor: "#4B4870" }} onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Container>
            </Modal>
        </div >
    );
};

export default Header;