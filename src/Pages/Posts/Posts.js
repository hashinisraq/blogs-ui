import React from "react";
import "./Posts.css";
import { Card, Col } from "react-bootstrap";


const Posts = ({ data }) => {
    const { title, author, author_img, date, readTime, catagory, post } = data;
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
                    <div className="text-center px-2" style={{ boxShadow: "1px 1px 1px 1px darkgrey", borderRadius: "4px" }}>
                        <Card.Text><b className="text-danger"># </b><span className="music">{catagory}</span></Card.Text>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <Card.Img style={{ width: "30px", height: "30px", borderRadius: "50%" }} src={author_img} />
                        <Card.Text className="ps-2 author">{author}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Posts;