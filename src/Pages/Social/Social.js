import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Social.css";

const Social = () => {
    return (
        <Container className="py-3">
            <h5>Social <b style={{ "color": "#F248BD" }}>&#8212;</b></h5>
            <Row className="ps-3">
                <Col>
                    <FontAwesomeIcon icon={faFacebookF} className="facebook border text-white p-3 m-2" />
                    <FontAwesomeIcon icon={faTwitter} className="twitter border text-white p-3 m-2" />
                    <FontAwesomeIcon icon={faInstagram} className="instagram border text-white p-3 m-2" />
                    <FontAwesomeIcon icon={faLinkedin} className="linkedin border text-white p-3 m-2" />
                </Col>
            </Row>
        </Container>
    );
};

export default Social;