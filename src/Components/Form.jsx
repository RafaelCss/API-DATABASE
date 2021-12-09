import React, { Component } from "react";
import HeaderPage from "./HeaderPage";
import InputForm from "./InputForm";

class Form extends Component {
  onSubmit(dada) {
    console.log(dada);
  }
  render() {
    return (
      <form className='Form'>
        <HeaderPage/>
        <InputForm onSubmit={this.onSubmit}/>
      </form>
    );
  }
}

export default Form;
