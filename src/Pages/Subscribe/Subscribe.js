import React from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Subscribe.css";
import styles from "../../Assets/styles.module.css";

const Subscribe = () => {
    return (
        <Container className={styles.textCenter + " " + styles.paddingTopBottom1}>
            <h2 className={styles.textColorBody1}>Subscribe to HI-BLOG</h2>
            <h6 className={styles.textColorBody1 + " " + styles.paddingTopBottom2}>Get the latest posts delivered right to your email.</h6>

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
            </Container>
        </Container>
    );
};

export default Subscribe;