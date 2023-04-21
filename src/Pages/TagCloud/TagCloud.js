import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import "./TagCloud.css";

const TagCloud = () => {
    return (
        <Container>
            <h5>Tag Cloud <b style={{ "color": "#F248BD" }}>&#8212;</b></h5>
            <Row>
                <Col className="text-secondary">
                    <Stack direction="horizontal" gap={4} className="pt-3 pb-2 ps-3">
                        <div className="box bg-white px-2 py-1 Health">
                            <b style={{ color: "#FBD794" }}># </b>
                            Health
                        </div>
                        <div className="box bg-white px-2 py-1 Lifestyle">
                            <b style={{ color: "#6EE6DD" }}># </b>
                            Lifestyle
                        </div>
                        <div className="box bg-white px-2 py-1 Music">
                            <b style={{ color: "#FF5B7A" }}># </b>
                            Music
                        </div>
                    </Stack>
                    <Stack direction="horizontal" gap={4} className="pt-1 pb-2 ps-3">
                        <div className="box bg-white px-2 py-1 Technology">
                            <b style={{ color: "#599CFF" }}># </b>
                            Technology
                        </div>
                        <div className="box bg-white px-2 py-1 Travel">
                            <b style={{ color: "#58567B" }}># </b>
                            Travel
                        </div>
                        <div className="box bg-white px-2 py-1 Video">
                            <b style={{ color: "#FC40B1" }}># </b>
                            Video
                        </div>
                    </Stack>
                </Col>
                {/* {
                    datas.map(data =>
                        <Col key={data._id}>
                            <Card className="border-0" style={{ backgroundColor: "#F9F9FE" }}>
                                <Card.Body className="d-flex align-items-center justify-content-start">
                                    <div>
                                        <Card.Img className="r_banner" src={data.banner} />
                                    </div>
                                    <div className="ps-3">
                                        <Card.Title className="r_title">{data.title}</Card.Title>
                                        <Card.Text className="r_text">
                                            {data.date} <b style={{ "color": "#F248BD" }}>&#8212;</b> {data.readTime} read
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                } */}
            </Row>
        </Container>
    );
};

export default TagCloud;