
import {createContext , useState} from 'react'

export const  UserContext =  createContext()

export const UserProvider = ({children}) => {

    const {nome , setNome} = useState('Qual é seu nome ?');
    const {email, setEmail} = useState('Digite sua senha ...');
    const { senha , setSenha} = useState('*******')

    // console.log(nome, email)
    return (
    <UserContext.Provider value={{nome, setNome, email, setEmail, senha, setSenha}}>
       {children} 
    </UserContext.Provider>
    )     
}
