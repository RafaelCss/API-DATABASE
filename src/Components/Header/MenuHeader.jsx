import React from "react";
import { Link } from "react-router-dom";
import '../Styles/HeaderPage.css'

export function MenuHeader() {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/cadastro">Cadastro</Link></li>
      </ul>
    </nav>
  );
}
