import React from "react";
import "./Posts.css";
import { Card, Col } from "react-bootstrap";
import styles from "../../Assets/styles.module.css";


const Posts = ({ data }) => {
    const { title, author, author_img, date, readTime, catagory, post } = data;
    return (
        <Col>
            <Card className={styles.boxShadow1 + " " + styles.paddingStart2}>
                <Card.Body className={styles.flexCenterStart}>
                    <Card.Img className={styles.tranformOnHover + " " + styles.bannerSize} src={data.banner} />
                    <Card.Title className={styles.textColorHeading1 + " " + styles.paddingStart3 + " " + styles.heading1}>{title}</Card.Title>
                </Card.Body>
                <Card.Body className={styles.textColorBody + " " + styles.textCenter}>
                    <Card.Text>
                        {date} <b style={{ "color": "#F248BD" }}>&#8212;</b> {readTime} min read
                    </Card.Text>
                    <Card.Text>
                        {post.slice(0, 100)}...
                    </Card.Text>
                </Card.Body>
                <Card.Body className={styles.flexCenterBetween + " " + styles.textColorBody}>
                    <div className={styles.textCenter + " " + styles.paddingX2 + " " + styles.boxShadow1 + " " + styles.borderRadius4}>
                        <Card.Text><b className="text-danger"># </b><span className="music">{catagory}</span></Card.Text>
                    </div>
                    <div className={styles.flexCenterBetween}>
                        <Card.Img style={{ width: "30px", height: "30px", borderRadius: "50%" }} src={author_img} />
                        <Card.Text className="ps-2 author">{author}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Posts;