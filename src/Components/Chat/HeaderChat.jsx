import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

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
  right: 0px;
  width: 70%;
  height: 30px;
  justify-content: center;
  align-items: flex-end;
  padding: 0.5rem;
  background-color: #686363;
  border-bottom: 1px solid #e3e3e3;
`;

export function HeaderChat() {
  return (
    <Headers>
      <Avatar 
      /* alt='Remy Sharp' 
      src='./images/avatar/1.jpg' */ />
    </Headers>
  );
}

export const BodyChat = () => {
  return (
    <>
      <HeaderChat />

      <div></div>

      <InputChat />
    </>
  );
};
