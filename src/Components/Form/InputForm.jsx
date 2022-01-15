import React from "react";
import {useState} from "react"
import "../Styles/Form.css";
import {UserContext} from "../../Context/UserData"



const  InputForm = () => {

  const {nome , setNome} = useState('Qual é seu nome ?');
  const {email, setEmail} = useState('Digite sua senha ...');
  const { senha , setSenha} = useState('*******')
    return (
      <section>
        <UserContext.Consumer value={nome, setNome, email, setEmail, senha, setSenha}>
          { () => (
        <div className="inputs">
          <label htmlFor='name'>Nome:</label>

          <input type='text' name='name'value={nome} onChange={setNome} id='name' />

          <label htmlFor='email'>Email:</label>

          <input type='email' name='email'  value={email} onChange={setEmail} id='email' />

          <label htmlFor='password'>Senha:</label>

          <input type='password' name='password' value={senha} onChange={setSenha} id='password' />

          <button type='submit' onClick={() => console.log(nome, email, senha )}>
            Cadastrar
          </button>
        </div>
          )}
      </UserContext.Consumer>
      </section>
    );
  
}

export default InputForm;
