import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./Router";
import {BrowserRouter} from "react-router-dom";
import "./styles/index.css"
import "./styles/general/buttons.css";
import "./styles/general/backgrounds.css";
import 'animate.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Router />
        </React.StrictMode>
    </BrowserRouter>
);
