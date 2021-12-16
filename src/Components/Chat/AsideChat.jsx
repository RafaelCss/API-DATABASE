import React from "react";
import img from "../Images/rafael.png";
import "../Styles/AsideChat.css";

export function AsideChat(props) {
  const arry = ["Jack", "Vaca", "Panela", "Lata", "Luanda", "Coelho", "Cabra"];

  return (
    <aside>
      <div className='chat-sidebar'>
        <div className='photo-perfil'>
          <img src={img}></img>
        </div>
      </div>

      <div className='search-contact'>
        <h3>Meus Contatos</h3>
      </div>
      <ul className='list-chat-contact'>
        {arry.map((item, index) => {
          return (
            <li key={index}>
              <div className='chat-contact'>
                <h3>{item}</h3>
                <span></span>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
