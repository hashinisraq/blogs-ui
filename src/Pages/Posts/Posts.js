import React from "react";
import "./Posts.css";
import { Card, Col } from "react-bootstrap";


const Posts = ({ data }) => {
    const { title, date, readTime, post } = data;
    return (
        <Col>
            <Card className="total-card p-2">
                <Card.Body className="d-flex align-items-center justify-content-start">
                    <Card.Img className="banner" src={data.banner} />
                    <Card.Title className="title ps-3">{title}</Card.Title>
                </Card.Body>
                <Card.Body className="card_body">
                    <Card.Text>
                        {date} <b style={{ "color": "#F248BD" }}>&#8212;</b> {readTime} read
                    </Card.Text>
                    <Card.Text>
                        {post.slice(0, 100)}...
                    </Card.Text>
                </Card.Body>
                <Card.Body style={{ color: "#6A7180" }} className="d-flex align-items-center justify-content-between">
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
    );
};

export default Posts;