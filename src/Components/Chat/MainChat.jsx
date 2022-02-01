import React from "react";
import "../Styles/reset.css"
import { AsideChat } from "./AsideChat";
import { BodyChat } from "./HeaderChat";

function  MainChat() {

    return(
    <main>
     
        <AsideChat />
        <BodyChat/>
    
    </main>
    )
  
}

export default MainChat;
