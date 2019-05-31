import React from "react";
import { Link } from "react-router-dom";

import LoginWrapper from "../../components/LoginWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import BtnBotCamp from "../../components/BtnBotCamp";

const Login = () => (
    <LoginWrapper>
        <LogoBotcamp />
        <Link to="/chat">
            <BtnBotCamp content="Entrar" />
        </Link>
    </LoginWrapper>
);

export default Login;