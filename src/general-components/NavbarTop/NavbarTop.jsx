import React from 'react';
import {Navbar} from "react-bootstrap";
import {Slide} from "react-awesome-reveal";
import '../../styles/components/NavbarTop/NavbarTop.css';
import '../../styles/components/NavbarTop/NavbarTopMedia.css';

const NavbarTop = ({lang,admin}) => {

    //set lang in localstorage
    const handleSetLang = value => {
        window.localStorage.setItem('lang',value);
        window.location.reload()
    }

    return (
        <Navbar>
            <Slide direction={"left"}>
                <div className="left">
                    <Navbar.Brand>
                        {/*eslint-disable-next-line*/}
                        <img
                            alt="logo"
                            src={"/images-dev/general/logo.png"}
                        />

                        <span className={"text-logo"}>
                            <h3>
                                {admin ? "Admin" : "Integerbytes"}
                            </h3>
                            <p className={"small"}>IT company</p>
                        </span>
                    </Navbar.Brand>

                    <div className="lang-container">
                        <p className={lang === "eng" ? "active" : ""} onClick={() => handleSetLang("eng")}>ENG</p>
                        <p className={lang === "rus" ? "active" : ""} onClick={() => handleSetLang("rus")}>RUS</p>
                    </div>
                </div>
            </Slide>

            <Slide direction={"right"}>
                <div className="right">
                    <a href="tel:+78314378850">+7 (831) 437-88-50</a>

                    <a href="#feedback" className={"out-pill-white-button"}>
                        {lang === "eng" && "Feedback"}
                        {lang === "rus" && "Обратная связь"}
                    </a>
                </div>
            </Slide>
        </Navbar>
    );
};

export default NavbarTop;
