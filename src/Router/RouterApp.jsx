import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainChat from "../Components/Chat/MainChat";
import Form from "../Components/Form/Form";
import Pagina404 from "./Pagina404";
import { UserProvider } from "../Context/UserData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Pagina404 />} />
        <Route
          path='/cadastro'
          element={
            <UserProvider>
              <Form />
            </UserProvider>
          }
        />
        <Route path='/chat' element={<MainChat />} />
        <Route element={<MainChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
