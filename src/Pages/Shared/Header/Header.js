import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "./images/logo.png";
import search from "./images/search.png";
import "./Home.css";


const Header = () => {
    return (
        <div>
            <div className="container header-container">
                <div className="social-container">
                    <FontAwesomeIcon icon={faFacebookF} className="icons" style={{ "color": "#175BEB" }} />

                    <FontAwesomeIcon icon={faTwitter} className="icons" style={{ "color": "#1DA1F2" }} />

                    <FontAwesomeIcon icon={faInstagram} className="icons" style={{ "color": "#F248BD" }} />

                    <FontAwesomeIcon icon={faLinkedin} className="icons" style={{ "color": "#1DA1F2" }} />

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