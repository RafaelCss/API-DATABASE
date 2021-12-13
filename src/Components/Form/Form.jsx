import React, { Component } from "react";
import InputForm from "./InputForm";
import HeaderPage from "../Header/HeaderPage"
import "../Styles/Form.css"

class Form extends Component {
  onSubmit(dada) {
    console.log(dada);
  }
  render() {
    return (
      <div>
      <HeaderPage />
      <form className='Form'>
        <h2 className="Title">Faça Seu Cadastro</h2>
        <InputForm onSubmit={this.onSubmit}/>
      </form>
      </div>
    );
  }
}

export default Form;
