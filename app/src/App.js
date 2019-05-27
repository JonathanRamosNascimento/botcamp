import React, { Component } from "react";

import LogoBotcamp from "./components/LogoBotcamp";
import BtnBotCamp from "./components/BtnBotCamp";

import "./styles/reset.css";

class App extends Component {
    render() {
        return (
            <>
                <LogoBotcamp />
                <BtnBotCamp />
            </>
        )
    }
}

export default App;