import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import "./TagCloud.css";

const TagCloud = () => {
    return (
        <Container className="pb-3">
            <h5>Tag Cloud <b style={{ "color": "#F248BD" }}>&#8212;</b></h5>
            <Row>
                <Col className="text-secondary">
                    <Stack direction="horizontal" gap={2} className="pt-3 pb-2">
                        <div className="box bg-white px-1 py-1 Health">
                            <b style={{ color: "#FBD794" }}># </b>
                            Health
                        </div>
                        <div className="box bg-white px-1 py-1 Lifestyle">
                            <b style={{ color: "#6EE6DD" }}># </b>
                            Lifestyle
                        </div>
                        <div className="box bg-white px-1 py-1 Music">
                            <b style={{ color: "#FF5B7A" }}># </b>
                            Music
                        </div>
                    </Stack>
                    <Stack direction="horizontal" gap={2} className="pt-1 pb-2">
                        <div className="box bg-white px-1 py-1 Technology">
                            <b style={{ color: "#599CFF" }}># </b>
                            Technology
                        </div>
                        <div className="box bg-white px-1 py-1 Travel">
                            <b style={{ color: "#58567B" }}># </b>
                            Travel
                        </div>
                        <div className="box bg-white px-1 py-1 Video">
                            <b style={{ color: "#FC40B1" }}># </b>
                            Video
                        </div>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
};

export default TagCloud;