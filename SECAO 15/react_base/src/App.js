import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Title } from "./pages/Login/styled";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Routes from "./routes";


export default function Login() {
    return (
        <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyles />
        </BrowserRouter>
    )
}

