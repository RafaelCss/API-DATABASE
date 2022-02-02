import React from "react";
import "../Styles/reset.css"
import { AsideChat } from "./AsideChat";
import { BodyChat } from "./HeaderChat";
import "../Images/rafael.png"
function  MainChat() {

    return(
    <main>
     
        <AsideChat />
        <BodyChat/>
    
    </main>
    )
  
}

export default MainChat;
