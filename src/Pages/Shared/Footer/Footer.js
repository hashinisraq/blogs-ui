import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import RecentPosts from "../../RecentPosts/RecentPosts";
import Social from "../../Social/Social";
import TagCloud from "../../TagCloud/TagCloud";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import logo from "./images/logo.png";
import styles from "../../../Assets/styles.module.css";

const Footer = () => {
    return (
        <div className={styles.bgColor1 + " " + styles.paddingTopBottom1}>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={3}>
                        <RecentPosts />
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <TagCloud />
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <Social />
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h5 className={styles.textColorHeading1}>About me <b style={{ "color": "#F248BD" }}>&#8212;</b></h5>
                        <div className="d-flex align-items-center justify-content-start ps-3 pt-2">
                            <img alt="logo" style={{ width: "75px", height: "75px", borderRadius: "50%" }} src="https://themes.estudiopatagon.com/wordpress/maktub/wp-content/uploads/2022/05/avatar-10.jpg" />
                            <div className={styles.paddingStart3}>
                                <big className="founder">
                                    <a href="/home" style={{ textDecoration: "none", color: "#4B4870" }}>
                                        Jonathan Doe
                                    </a>
                                </big>
                                <p className={styles.textColorBody2}>Founder & Editor</p>
                                <small className="d-flex align-item-start justify-content-between">
                                    <Nav.Link href="https://facebook.com">
                                        <FontAwesomeIcon icon={faFacebookF} className="icon" style={{ "color": "#175BEB" }} />
                                    </Nav.Link>
                                    <Nav.Link href="https://twitter.com">
                                        <FontAwesomeIcon icon={faTwitter} className="icon" style={{ "color": "#1DA1F2" }} />
                                    </Nav.Link>
                                    <Nav.Link href="https://instagram.com">
                                        <FontAwesomeIcon icon={faInstagram} className="icon" style={{ "color": "#F248BD" }} />
                                    </Nav.Link>
                                    <Nav.Link href="https://linkedin.com">
                                        <FontAwesomeIcon icon={faLinkedin} className="icon" style={{ "color": "#1DA1F2" }} />
                                    </Nav.Link>
                                </small>
                            </div>
                        </div>
                        <p className={styles.textColorBody2 + " " + styles.paddingX2 + " " + styles.paddingTopBottom2}>
                            Hello! My name is Jonathan Doe working from Bangladesh. I create some blogs and porfolios for differents markets, also, i offer live support via calling system.
                        </p>
                    </Col>
                </Row>
                <Row className={styles.textCenter}>
                    <Col sm={12} md={12} lg={12}>
                        <a href="/home" rel="noopener noreferrer">
                            <img src={logo} width="180rem" alt="logo" />
                        </a>
                        <div className={styles.textColorHeading1}>
                            © HI-BLOG 2023
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;