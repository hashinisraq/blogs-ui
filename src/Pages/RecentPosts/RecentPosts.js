import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useDatas from "../../Hooks/useDatas";
import "./RecentPost.css";

const RecentPosts = () => {
    const [datas] = useDatas();

    return (
        <Container className="pb-3">
            <h5>Recent Posts <b style={{ "color": "#F248BD" }}>&#8212;</b></h5>
            <Row>
                {
                    datas.map(data =>
                        <Col key={data._id}>
                            <Card className="border-0" style={{ backgroundColor: "#F9F9FE" }}>
                                <Card.Body className="px-0 d-flex align-items-center justify-content-start">
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
                }
            </Row>
        </Container>
    );
};

export default RecentPosts;