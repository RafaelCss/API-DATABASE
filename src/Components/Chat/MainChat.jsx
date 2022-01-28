import React from "react";
import "../Styles/reset.css"
import { AsideChat } from "./AsideChat";
import { ChatProvider } from "./ContextChat";

function  MainChat() {

    return(
    <main>
     <ChatProvider>
        <AsideChat />
    </ChatProvider>   
    </main>
    )
  
}

export default MainChat;
