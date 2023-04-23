import React from "react";
import { Button, Container, Form, InputGroup, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Subscribe.css";

const Subscribe = () => {
    return (
        <Container className="text-center">
            <h2>Subscribe to HI-BLOG</h2>
            <h6 className="py-3">Get the latest posts delivered right to your email.</h6>

            <Container>
                <InputGroup className="mb-4">
                    <Form.Control
                        placeholder="Enter your email address"
                        aria-label="email address"
                        aria-describedby="basic-addon1"
                    />
                    <Button variant="dark" id="button-addon2">
                        Submit
                    </Button>
                </InputGroup>
            </Container>
            <Container>
                <FontAwesomeIcon icon={faFacebookF} className="social_icon" style={{ "color": "#175BEB" }} />
                <FontAwesomeIcon icon={faTwitter} className="social_icon" style={{ "color": "#1DA1F2" }} />
                <FontAwesomeIcon icon={faInstagram} className="social_icon" style={{ "color": "#F248BD" }} />
                <FontAwesomeIcon icon={faLinkedin} className="social_icon" style={{ "color": "#1DA1F2" }} />

                {/* <Nav className="socialContainer text-center" style={{ padding: "0px 26rem" }}>
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
                </Nav> */}
            </Container>
        </Container>
    );
};

export default Subscribe;