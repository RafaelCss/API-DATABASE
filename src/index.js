import React from 'react';
import ReactDOM from 'react-dom';
import "./Components/Styles/Index.css";
import "./Components/Styles/reset.css";
import HeaderPage from "./Components/HeaderPage";
import Form from './Components/Form';


ReactDOM.render(
  <React.StrictMode>
    <HeaderPage/>
    <Form/>
  </React.StrictMode>,
  document.getElementById('root')
);

