import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import { ContextChat } from "./ContextChat";

const Headers = styled.div`
  display: flex;
  position: absolute;
  right: 0px;
  width: 70%;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: #686363;
  border-bottom: 1px solid #e3e3e3;
`;

const InputChat = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 1px;
  right: 10px;
  height: 20px;
  width: 65%;
  margin: 0px;
  color: white;
`;
/* './images/avatar/1.jpg'  */
export function HeaderChat() {
  return (
    <>
      <Headers>
        <ContextChat.Consumer>{({ contact, imagem }) => <Avatar alt={contact} src={imagem} />}</ContextChat.Consumer>
      </Headers>
        <div></div>
      <InputChat/>
    </>
  );
}

