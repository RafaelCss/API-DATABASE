import React from "react";
import "../Styles/reset.css";
import { AsideChat } from "./AsideChat";
import { HeaderChat } from "./HeaderChat";
import "../Images/rafael.png";
import { ChatProvider } from "./ContextChat";

function MainChat() {
  return (
    <main>
     
        <AsideChat />
        <HeaderChat />
      
    </main>
  );
}

export default MainChat;
