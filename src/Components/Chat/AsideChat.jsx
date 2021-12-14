import React from "react";
import { Avatar, Image,Badge } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../Styles/AsideChat.css";


export function AsideChat() {
  return (
    //aside chat
    <aside>
      <div className='chat-sidebar'>
      <span className="avatar-item">
        <Avatar shape="circle" icon={<UserOutlined />}
         size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
         src="../Images/rafael.png"
         draggable = "true" 
        />
    </span>
      </div>
      <ul className='list-chat-contact'>
        <li>
          <div className='chat-contact'>
            <Avatar className='Avatar' size={50} icon={<UserOutlined />} />
            <h3>Nome do Usuário</h3>
            <span>Online</span>
          </div>
        </li>
      </ul>
    </aside>
  );
}
