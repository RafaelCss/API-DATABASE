import React from "react";
import { Avatar, Image, Badge, Tooltip, Button } from "antd";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import "../Styles/AsideChat.css";

export function AsideChat(props) {
  const arry =["Jaca", "Vaca", "Panela", "Lata", "Luanda", "Coelho", "Cabra"]

  return (
    <aside>
      <div className='chat-sidebar'>
        <Avatar shape='circle' icon={<UserOutlined />} size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src='../Images/rafael.png' draggable='true' />
      </div>
      <div className='search-contact'>
        <h3>Meus Contatos</h3>
        <Tooltip title='search'>
          <Button type='primary' shape='circle' icon={<SearchOutlined />} />
        </Tooltip>
      </div>
      {arry.map((item,index) => {
      return (
      <ul className='list-chat-contact' onClick={props} key={item+index}>
        <li>
          <div className='chat-contact'>
            <Avatar className='Avatar' size={50} icon={<UserOutlined />} />
            <Badge count={1} />
            <h3>{item}</h3>
            <span>Online</span>
          </div>
        </li>
      </ul>)
      })}
    </aside>
  );
}
