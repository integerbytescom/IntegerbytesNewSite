import React from 'react';
import Preview from "../components/Preview/Preview";
import Services from "../components/Services/Services";
import Vacancies from "../components/Vacancies/Vacancies";
import About from "../components/About/About";
import AboutProducts from "../components/AboutProducts/AboutProducts";
import Team from "../components/Team/Team";
import Contacts from "../components/Contacts/Contacts";
import NavbarTop from "../general-components/NavbarTop/NavbarTop";
import FooterBottom from "../general-components/FooterBottom/FooterBottom";
import BgImages from "../general-components/BgImages";

const Main = ({lang,admin = false}) => {
    return (
        <>
            {/* images */}
            <BgImages />

            <NavbarTop lang={lang} admin={admin} />
            <div className={"Main container"}>
                <Preview lang={lang} />
                <Services lang={lang} />
                <Vacancies admin={admin} lang={lang} />
                <About lang={lang} />
                <AboutProducts lang={lang} />
                <Team admin={admin} lang={lang} />
                <Contacts lang={lang} />
            </div>
            <FooterBottom />
        </>
    );
};

export default Main;
