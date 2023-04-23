import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Social.css";
import styles from "../../Assets/styles.module.css";

const Social = () => {
    return (
        <Container className={styles.paddingBottom3}>
            <h5 className={styles.textColorHeading1}>Social <b style={{ "color": "#F248BD" }}>&#8212;</b></h5>
            <Row className="pt-2">
                <Col>
                    <FontAwesomeIcon icon={faFacebookF} className="facebook border text-white px-3 py-2 m-1" />
                    <FontAwesomeIcon icon={faTwitter} className="twitter border text-white p-2 m-1" />
                    <FontAwesomeIcon icon={faInstagram} className="instagram border text-white p-2 m-1" />
                    <FontAwesomeIcon icon={faLinkedin} className="linkedin border text-white p-2 m-1" />
                </Col>
            </Row>
        </Container>
    );
};

export default Social;