import React from "react";
import { Link } from "react-router-dom";

import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBotcamp from "../../components/LogoutBotcamp";
import HeaderWrapper from "../../components/HeaderWrapper";
import InputMessage from "../../components/InputMessage";
import MessageBotcamp from "../../components/MessageBotcamp";
import MessageWrapper from "../../components/MessageWrapper";
import AvatarMessage from "../../components/AvatarMessage";
import FormMessage from "../../components/FormMessage";

const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Vai")
}

const handleChange = (event) => {
    console.log(event.target.value)
}

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
            <AvatarMessage content="123.123.123-23" />
        </MessageWrapper>

        <FormMessage onSubmit={handleSubmit}>
            <InputMessage onChange={handleChange} />
        </FormMessage>
    </>

export default Chat;