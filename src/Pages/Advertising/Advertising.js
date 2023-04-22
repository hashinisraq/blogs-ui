import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import advertising from "./images/advertising.png";
import "./Advertising.css";

const Advertising = () => {
    return (
        <Container className="py-3">
            <h5 className="pb-2">Advertising <b style={{ "color": "#F248BD" }}>&#8212;</b></h5>
            <Row className="ps-4">
                <Col>
                    <img className="advertising" src={advertising} alt="advertising" />
                </Col>
            </Row>
        </Container>
    );
};

export default Advertising;