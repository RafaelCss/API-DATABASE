import React, {useState} from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import imagem from "../Images/rafael.png"
import "../Styles/AsideChat.css"
import {ContextChat} from "./ContextChat"

/* const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
})); */

export const  AsideChat = () => {
  const [contact , setContact] = useState();
  const [image, setImage] = useState();
 

  function addDataFromHeader ( value , imagem ){
    setContact(value)
    setImage(imagem)
  }

  return (
    <aside>
    <ContextChat.Provider value={{contact, setContact, image, setImage}}>
    <List dense className={"list-chat-contact"}>
      {["Teste1","Teste2"].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} onClick = {()=> addDataFromHeader(value, imagem) } button>
            <ListItemAvatar>
              <Avatar 
                alt={`Avatar n°${value + 1}`}
                src={` ${imagem}`}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`${value}`} />
            <ListItemSecondaryAction>
              <span>online</span>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    </ContextChat.Provider>  

    </aside>
  );
}