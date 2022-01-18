import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "../Context/UserData";
import MainChat from "../Components/Chat/MainChat";
import Form from "../Components/Form/Form";
import Pagina404 from "./Pagina404";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route 
        exact path='*' 
        element={<Pagina404 /> } /> {/*sem correspondência */}

        <Route
          path='/cadastro'
          element={
            <UserProvider>
              <Form />
            </UserProvider>
          }/>

        <Route 
        path='/chat' 
        element={<MainChat />} 
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
