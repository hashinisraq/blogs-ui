import React from "react";
import { Button } from "react-bootstrap";
import logo from "./images/logo.png";
import search from "./images/search.png";
import "./Home.css";

const Header = () => {
    return (
        <div>
            <div className="container header-container">
                <div className="social-container">
                    <li>
                        Facebook
                    </li>
                    <li>
                        Twitter
                    </li>
                    <li>
                        Instagram
                    </li>
                    <li>
                        Linkedin
                    </li>
                </div>
                <div>
                    <a href="/home">
                        <img src={logo} alt="logo" width="80rem" />
                    </a>
                </div>
                <div>
                    <Button className="search-btn">
                        <img src={search} alt="search icon" srcset="" width="20rem" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Header;