import React from "react";
import "../Styles/reset.css"
import { AsideChat } from "./AsideChat";
import { ChatProvider } from "./ContextChat";
import { BodyChat } from "./HeaderChat";

function  MainChat() {

    return(
    <main>
     <ChatProvider>
        <AsideChat />
        <BodyChat/>
    </ChatProvider>   
    </main>
    )
  
}

export default MainChat;
