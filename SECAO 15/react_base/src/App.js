import React from "react";
import { Router } from "react-router-dom";

import history from "./services/history";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Routes from "./routes";


export default function Login() {
    return (
        <Router history={history}>
            <Header />
            <Routes />
            <GlobalStyles />
        </Router>
    )
}

