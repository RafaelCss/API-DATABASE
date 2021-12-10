import React, { Component } from "react";
import InputForm from "./InputForm";
import "../Styles/Form.css"

class Form extends Component {
  onSubmit(dada) {
    console.log(dada);
  }
  render() {
    return (
      <form className='Form'>
        <h2 className="Title">Faça Seu Cadastro</h2>
        <InputForm onSubmit={this.onSubmit}/>
      </form>
    );
  }
}

export default Form;
