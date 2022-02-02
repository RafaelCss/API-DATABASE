import React,{createContext, useState} from 'react'
import { HeaderChat } from './HeaderChat';


export const ContextChat = createContext({});


export const  ChatProvider = ({children}) => {
 
    const [contact , setContact] = useState();
    const [image, setImage] = useState();
    
    return (
    <ContextChat.Provider value={contact, setContact, image, setImage}>      
       <HeaderChat/>
    </ContextChat.Provider>
    )     
}
