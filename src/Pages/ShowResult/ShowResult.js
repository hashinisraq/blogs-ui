import React from "react";
import { useParams } from "react-router";
import Header from "../Shared/Header/Header";
import { Container, Row } from "react-bootstrap";
import styles from "../../Assets/styles.module.css";
import useDatas from "../../Hooks/useDatas";
import Posts from "../Posts/Posts";

const ShowResult = () => {
    const title = useParams();
    const [datas] = useDatas();

    return (
        <div className={styles.bgColor1}>
            <Header />
            <div>
                <Container>
                    <h4 className="py-2 m-0 text-center">Search result of {title.title}</h4>
                    <Row sm={1} md={1} lg={1} className="g-2">
                        {
                            datas.map(data => data.catagory.toLowerCase() === title.title.toLowerCase() ?
                                <Posts key={data._id} data={data}></Posts>
                                : <div key={data._id}></div>
                            )
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default ShowResult;