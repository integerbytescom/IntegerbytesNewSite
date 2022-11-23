import React from 'react';
import {Fade} from "react-awesome-reveal";

const FooterBottom = ({lang}) => {
    return (
        <Fade direction={"up"}>
            <footer className={"FooterBottom"}>
                <img
                    style={{zIndex:-1}}
                    src="/images-dev/bgs/dots-old.png"
                    alt="vacancies"
                    className={"footer-dots-img"}
                />

                <p>INTEGERBYTES {new Date().getFullYear()} © {lang === 'rus' ? 'Все права защищены' : 'All rights reserved'}</p>
            </footer>
        </Fade>
    );
};

export default FooterBottom;
