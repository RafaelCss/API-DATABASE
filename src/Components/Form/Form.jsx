import React  from "react";
import InputForm from "./InputForm";
import HeaderPage from "../Header/HeaderPage";
import "../Styles/Form.css";

const  Form = () => {

    return (
      <>
        <HeaderPage />
        <form className='Form'>
          <h2 className='Title'>Faça Seu Cadastro</h2>
          <InputForm  />
        </form>
      </>
    );
}

export default Form;
