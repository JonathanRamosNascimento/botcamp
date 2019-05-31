import React from "react";
import { Link } from "react-router-dom";

import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBotcamp from "../../components/LogoutBotcamp";
import HeaderWrapper from "../../components/HeaderWrapper";
import InputMessage from "../../components/InputMessage";
import MessageBotcamp from "../../components/MessageBotcamp";
import MessageWrapper from "../../components/MessageWrapper";

const Chat = () =>
    <>
        <HeaderWrapper>
            <LogoBotcamp small />
            <Link to="/">
                <LogoutBotcamp />
            </Link>
        </HeaderWrapper>
        <MessageWrapper>
            <MessageBotcamp>!cpf</MessageBotcamp>
        </MessageWrapper>
        <InputMessage />
    </>

export default Chat;