import React from 'react';
import {Fade} from "react-awesome-reveal";

const FooterBottom = ({lang}) => {
    return (
            <footer className={"FooterBottom"}>
                <img
                    style={{zIndex:-1}}
                    src="/images-dev/bgs/dots-old.png"
                    alt="vacancies"
                    className={"footer-dots-img"}
                />

                <Fade direction={"up"}>
                    <p>INTEGERBYTES {new Date().getFullYear()} © {lang === 'rus' ? 'Все права защищены' : 'All rights reserved'}</p>
                </Fade>
            </footer>
    );
};

export default FooterBottom;
