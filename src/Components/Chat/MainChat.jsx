import React from "react";
import "../Styles/reset.css"
import { AsideChat } from "./AsideChat";
import HeaderChat from "./HeaderChat";
import FooterChat from "./FooterChat";

function  MainChat() {
  
    return(
    <main>
     <HeaderChat/>
     <AsideChat/>
     <FooterChat/>   
    </main>
    )
  
}

export default MainChat;
