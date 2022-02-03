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
  color : white;
`;

const InputChat = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 1px;
  right: 200px;
  height: 20px;
  width: 40%;
  margin: 0px;
  border-radius: 2px;
`;

const NameUser = styled.h3`
  color: aqua;
`
/* './images/avatar/1.jpg'  */
{/* <Avatar alt={contact} src={imagem} /> */}
export function HeaderChat() {
  return (
    <>
      <Headers>
        <ContextChat.Consumer>{
        ({ contact }) => 
        <Avatar alt={contact} src={'./images/avatar/1.jpg'} />
        }</ContextChat.Consumer>
      </Headers>
      
      <InputChat/>
    </>
  );
}

