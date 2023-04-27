import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Posts from "../Posts/Posts";
import RecentPosts from "../RecentPosts/RecentPosts";
import useDatas from "../../Hooks/useDatas";
import TagCloud from "../TagCloud/TagCloud";
import Social from "../Social/Social";
import Advertising from "../Advertising/Advertising";
import Subscribe from "../Subscribe/Subscribe";
import styles from "../../Assets/styles.module.css";
import Header from "../Shared/Header/Header";

const Home = () => {
    const [datas] = useDatas();

    return (
        <>
            <Header />
            <div className={styles.bgColor1 + " " + styles.paddingTopBottom1}>
                <Container>
                    <Row>
                        <Col sm={12} md={8} lg={8} className="pb-5">
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
                                    <Social />
                                    <Advertising />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={styles.bgColor2 + " " + styles.paddingTopBottom1}>
                <Subscribe />
            </div>
        </>
    );
};

export default Home;