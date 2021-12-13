import React from "react";
import { AsideChat } from "./AsideChat";
import HeaderChat from "./HeaderChat";
import FooterChat from "./FooterChat";

function  MainChat() {
  
    return(
    <main>
        <p>Olá MUndo</p>
     <HeaderChat/>
     <AsideChat/>
     <FooterChat/>   
    </main>
    )
  
}

export default MainChat;
