import React, { Component } from "react";
import InputForm from "./InputForm";
import "./Styles/Form.css"

class Form extends Component {
  onSubmit(dada) {
    console.log(dada);
  }
  render() {
    return (
      <form className='Form'>
        <InputForm onSubmit={this.onSubmit}/>
      </form>
    );
  }
}

export default Form;
