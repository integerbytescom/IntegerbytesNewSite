import React, {useEffect, useState} from 'react';
import {Route,Routes} from "react-router-dom";
import Main from "./pages/Main";
import Admin from "./pages/Admin";

const Router = () => {

    //lang value
    const [lang,setLang] = useState("eng");

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
        <div>
            <Routes>
                <Route path={"/"} element={<Main lang={lang} />} />
                <Route path={"/admin"} element={<Admin lang={lang} />} />
            </Routes>
        </div>
    );
};

export default Router;
