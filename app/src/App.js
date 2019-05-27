import React, { Component } from "react";

import LogoBotcamp from "./components/LogoBotcamp";
import BtnBotCamp from "./components/BtnBotCamp";
import LoginWrapper from "./components/LoginWrapper";

import "./styles/reset.css";

class App extends Component {
    render() {
        return (
            <LoginWrapper>
                <LogoBotcamp />
                <BtnBotCamp />
            </LoginWrapper>
        )
    }
}

export default App;