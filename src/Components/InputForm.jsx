import React, { Component } from "react";
import "./Styles/Form.css"
import api from "../../src/api/Api"

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

   dataForm(event) {
    const state = Object.assign({}, this.state);
    const campo = event.target.name;
    state[campo] = event.target.value;
    this.setState(state);
  }

  _onSubmit(event) {
   event.preventDefault();

    this.props.onSubmit(this.state)
    // enviar informações para o servidor ..
    this.componentWillUnmount()
  }
  async componentWillUnmount(){
    const state = Object.assign({}, this.state)
    const resposta =  await api.post("/cadastro", {
      body : JSON.stringify(state)
    })
    resposta.then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <section>
        <input type='text' name='name' value={this.state.name} onChange={this.dataForm.bind(this)} id='name' />
        <input type='email' name='email' value={this.state.email} onChange={this.dataForm.bind(this)} id='email' />
        <input type='password' name='password' value={this.state.password} onChange={this.dataForm.bind(this)} id='password' />
        <button  type ="submit" onClick={event=>this._onSubmit(this)}>Enviar</button>
      </section>
    );
  }
}

export default InputForm;
