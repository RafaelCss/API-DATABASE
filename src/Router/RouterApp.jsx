import React, { useState } from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import MainChat from "../Components/Chat/MainChat";
import Form from "../Components/Form/Form";
import Pagina404 from "./Pagina404"; 
import {UserContext} from "../Context/UserData"

function App() {
  const {nome , setNome} = useState('Qual é seu nome ?');
  const {email, setEmail} = useState('Digite sua senha ...');
  const { senha , setSenha} = useState('*******')
  return (
    <BrowserRouter>
    <Routes>
       <Route path = '/' element={<Pagina404/>}/> 
        <Route exact path='/cadastro' 
        element={
         <UserContext.Provider value={nome, setNome, email, setEmail, senha, setSenha}>
           <Form/>
         </UserContext.Provider> 
        }/>
        <Route exact path='/chat' element={<MainChat/>} />
        <Route exact element={<MainChat/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
