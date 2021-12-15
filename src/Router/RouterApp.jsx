import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainChat from "../Components/Chat/MainChat";
import Form from "../Components/Form/Form";
import Pagina404 from "./Pagina404";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path ="/" element={<Pagina404/>}/> */}
    </Routes>
      <Routes>
        <Route exact path='cadastro' element={<Form/>} />
      </Routes>
      <Routes>
        <Route exact path='chat' element={<MainChat/>} />
      </Routes>
      <Routes>
        <Route exact element={<MainChat/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
