import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Home.css";

const datas = [
    {
        "_id": 1,
        "title": "Far far away, behind the word mountains",
        "date": "August 15, 2019",
        "readTime": "2 min",
        "totalComment": 1,
        "totalViews": 2918,
        "banner": "https://themes.estudiopatagon.com/wordpress/maktub/wp-content/uploads/2019/07/mixkit-man-holding-the-brim-of-a-yellow-fedora-that-covers-93-desktop-wallpaper-950x500.jpg",
        "catagory": ["Music", "Technology", "Travel"],
        "post": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. "
    },
    {
        "_id": 2,
        "title": "Far far away, behind the word mountains",
        "date": "August 15, 2019",
        "readTime": "2 min",
        "totalComment": 1,
        "totalViews": 2918,
        "banner": "https://themes.estudiopatagon.com/wordpress/maktub/wp-content/uploads/2019/07/mixkit-man-holding-the-brim-of-a-yellow-fedora-that-covers-93-desktop-wallpaper-950x500.jpg",
        "catagory": ["Music", "Technology", "Travel"],
        "post": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. "
    },
    {
        "_id": 3,
        "title": "Far far away, behind the word mountains",
        "date": "August 15, 2019",
        "readTime": "2 min",
        "totalComment": 1,
        "totalViews": 2918,
        "banner": "https://themes.estudiopatagon.com/wordpress/maktub/wp-content/uploads/2019/07/mixkit-man-holding-the-brim-of-a-yellow-fedora-that-covers-93-desktop-wallpaper-950x500.jpg",
        "catagory": ["Music", "Technology", "Travel"],
        "post": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. "
    }
]

const Home = () => {
    return (
        <Container>
            <Row>
                <Col sm={12} md={8} lg={8}>
                    <Row xs={1} md={2} lg={2} className="g-5">
                        {datas.map(data => (
                            <Col key={data._id}>
                                <Card className="total-card p-3">
                                    <Card.Body className="d-flex align-items-center justify-content-start">
                                        <Card.Img className="banner" src={data.banner} />
                                        <Card.Title className="title ps-2">{data.title}</Card.Title>
                                    </Card.Body>
                                    <Card.Body>
                                        <Card.Text>
                                            {data.post}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Body className="d-flex align-items-center justify-content-between">
                                        <div className="text-center" style={{ boxShadow: "1px 1px 1px 1px darkgrey", width: "4.5rem", borderRadius: "4px" }}>
                                            <Card.Text><b className="text-danger"># </b><span className="music">Music</span></Card.Text>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <Card.Img style={{ width: "30px", height: "30px", borderRadius: "50%" }} src="https://themes.estudiopatagon.com/wordpress/maktub/wp-content/uploads/2022/05/avatar-10.jpg" />
                                            <Card.Text className="ps-2 author">Jonathan Doe</Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <Row xs={1} md={1} lg={1} className="g-5">
                        {datas.map(data => (
                            <Col key={data._id}>
                                <Card>
                                    <Card.Img variant="top" src={data.banner} />
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text>
                                            {data.post}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;