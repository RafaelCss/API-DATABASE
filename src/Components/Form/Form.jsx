import React from "react";
import "../Styles/Form.css";
import {UserContext} from "../../Context/UserData"
import HeaderPage from "../Header/HeaderPage";



const  Form = () => {

    return (
      <>
      <HeaderPage />
      <section>
        <form className='Form'>
          <h2 className='Title'>Faça Seu Cadastro</h2>
        <UserContext.Consumer>
          { ({nome, setNome, email, setEmail, senha, setSenha}) => (
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
      </form>
      </section>
      </>
    );
  
}

export default Form;
