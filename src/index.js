import 'bootstrap/dist/css/bootstrap.min.css';
import 'react'
import './style.css';
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const feather = require('feather-icons');

import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./footer";

setTimeout ( () => {
    feather.replace();
}, 1000);
 
const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Header></Header>
        <div className="container py-4">
            <div className="row">
                <Main className="col-8"></Main>
                <Aside className="col-4"></Aside>
            </div>
        </div>
        
        <div className="bg-info">
            <Footer></Footer>
        </div>

    </StrictMode>
);