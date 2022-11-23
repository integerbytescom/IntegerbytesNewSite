import NavbarTop from "./general-components/NavbarTop/NavbarTop";
import BgImages from "./general-components/BgImages";
import Preview from "./components/Preview/Preview";
import {useEffect, useState} from "react";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import AboutProducts from "./components/AboutProducts/AboutProducts";
import Team from "./components/Team/Team";
import Contacts from "./components/Contacts/Contacts";
import Vacancies from "./components/Vacancies/Vacancies";
import FooterBottom from "./general-components/FooterBottom/FooterBottom";
import 'animate.css';


export default function Home({admin}) {

    //lang value
    const [lang,setLang] = useState("eng");

    //set lang in localstorage
    const handleSetLang = value => {
        window.localStorage.setItem('lang',value);
        window.location.reload()
    }

    useEffect(() => {
        const langInner = window.localStorage.getItem('lang');
        if (langInner){
            if (langInner !== "eng" && langInner !== "rus"){
                window.localStorage.setItem('lang','eng');
                setLang("eng");
            }else {
                setLang(langInner);
            }
        }else {
            window.localStorage.setItem('lang','eng');
            setLang("eng");
        }
    },[lang])

  return (
      <>
          <NavbarTop handleSetLang={handleSetLang} lang={lang} admin={admin} />

          {/* images */}
          <BgImages />

          <div className={"container"}>
              <Preview lang={lang} />
              <Services lang={lang} />
              <Vacancies admin={admin} lang={lang} />
              <About lang={lang} />
              <AboutProducts lang={lang} />
              <Team admin={admin} lang={lang} />
              <Contacts lang={lang} />
          </div>

          <FooterBottom lang={lang} />
      </>
  )
}
