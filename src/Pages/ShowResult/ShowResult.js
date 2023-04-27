import React from "react";
import { useParams } from "react-router";
import Header from "../Shared/Header/Header";
import { Container } from "react-bootstrap";
import styles from "../../Assets/styles.module.css";

const ShowResult = () => {
    const title = useParams();

    return (
        <div className={styles.bgColor1}>
            <Header />
            <div>
                <Container>
                    <h4 className="p-0 m-0">{title.title}</h4>
                </Container>
            </div>
        </div>
    );
};

export default ShowResult;