import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import MainChat from "../Components/Chat/MainChat";
import Form from "../Components/Form/Form";

function App(){
  return(
 <BrowserRouter>
 <Routes>
 <Route exact path='/chat' element={<MainChat/>}/>
 <Route exact path='/cadastro' element ={<Form/>}/>    
 </Routes>
</BrowserRouter>

  )
}

export default App;