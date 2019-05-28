import React from "react";

import LoginWrapper from "../../components/LoginWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import BtnBotCamp from "../../components/BtnBotCamp";

const Login = () => (
    <LoginWrapper>
        <LogoBotcamp />
        <BtnBotCamp content="Entrar" />
    </LoginWrapper>
);

export default Login;