import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Posts from "../Posts/Posts";
import RecentPosts from "../RecentPosts/RecentPosts";
import useDatas from "../../Hooks/useDatas";
import TagCloud from "../TagCloud/TagCloud";

const Home = () => {
    const [datas] = useDatas();

    return (
        <Container>
            <Row>
                <Col sm={12} md={8} lg={8}>
                    <Row xs={1} md={2} lg={2} className="g-5">
                        {datas.map(data => (
                            <Posts key={data._id}
                                data={data}
                            >
                            </Posts>
                        ))}
                    </Row>
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <Row xs={1} md={1} lg={1} className="g-5">
                        <Col>
                            <RecentPosts />
                            <TagCloud />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;