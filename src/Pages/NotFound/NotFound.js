import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="text-center p-5 m-5">
            <iframe title="wrong" src="https://giphy.com/embed/Wq9RLX06zRg4UM42Qf" ></iframe>
            <h2>Page Not Found</h2>
            <Link to="/home"><Button variant="secondary">Home</Button></Link>
        </div>
    );
};

export default NotFound;