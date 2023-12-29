import React from "react"
import {InputNoIcon, InputIcon, InputPhone} from "./components/Input/Input"
import "./Form.module.css"
import {ButtonNavigate, ButtonSubmit } from "./components/Button/Button"
import icoUser from "../../components/svg/icoUser.svg"
import icoEmail from "../../components/svg/icoEmail.svg"
import icoPassword from "../../components/svg/icoPassword.svg"
import { useNavigate } from "react-router-dom"
import MyModal from "../partials/modals/modal-message"  // Importe o componente de modal
import Modal_message from "../partials/modals/modal-message"


export const FormSigin = () => {
    const REDIRECT_TO = useNavigate()
    const [email, setEmail ] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [name, setName] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [submiting, setSubmiting] = React.useState(false)

    const [modalOpen, setModalOpen] = React.useState(false);
    const [modal_message, setModal_message] = React.useState("");

    React.useEffect(() => {
        setTimeout(() => {
            setModalOpen(false)
        }, 3000);
    }, [modalOpen])
    function create_user_account(name, email, phone, password) {
        return {
            user:{
                name: name,
                email: email,
                phone:phone,
                password: password
            }
        }
        
    }

    function HandleSubmit(event){
        event.preventDefault()
        setSubmiting(true);
        const formData = create_user_account(name, email, phone, password)
        fetch("http://localhost:8080/adm/create-account", 
        {
            method: "post",
            
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(formData)
    
        })
        .then((response) => response.json())
        .then((response) => {
            setSubmiting(false)
            setModalOpen(true)
            setModal_message(response.message)
            if(response.OK){
                setTimeout(() => {
                    
                    REDIRECT_TO('/adm/set-location')
                }, 3000)

            }
        })
        .catch((error) => { 
            setSubmiting(false)
            setModalOpen(true)

            setModal_message(error.message)
 
 
        })
    }
    return <React.Fragment>
            <Modal_message message={modalOpen} content_message={modal_message} />

            <form className="body-translate"  onSubmit={HandleSubmit}>
                <InputIcon classCon={"content-input-icon"} classN={"input-icon"}  type={"text"} img={icoUser} name={"name"} placeHolder={"Nome"} id={"1"}  value={name} setValue={setName}  />
                <InputIcon classCon={"content-input-icon"} classN={"input-icon"}  type={"email"} img={icoEmail} name={"email"} placeHolder={"Email"} id={"1"}  value={email} setValue={setEmail}  />
                <InputPhone classN={"input-icon"}  type={"number"} name={"phone"} placeHolder={"Telefone"} id={"1"}  value={phone} setValue={setPhone}  />
                <InputIcon classCon={"content-input-icon"} classN={"input-icon"}  type={"password"} img={icoPassword} name={"password"} placeHolder={"Senha"} id={"2"}  value={password} setValue={setPassword}  />
                <ButtonSubmit text={"Criar Conta"} submiting={submiting} />
            </form>

    </React.Fragment> 
}

export const FormLogin = () => {
const go = useNavigate()
    const [email, setEmail ] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [name, setName] = React.useState("")

    function get_user_account(any, password) {
        return {
            user:{
                any : any,
                password: password
            }
        }
        
    }

    function HandleSubmit(event){
        event.preventDefault()
        const formData = get_user_account("Login", email, password)
        fetch("http://localhost:8080/login", 
        {
            method: "post",
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if(data == "criado")
                go("/home")
            else
                alert("senha ou email errada!")
         }).catch((error)=>  alert("Algo inesperado ocorreu!"))
         .finally(() => console.log("a requisição terminou!"))
            
        }

    return <form onSubmit={HandleSubmit}>    
        <InputIcon classCon={"content-input-icon"} classN={"input-icon"}  type={"email"} img={icoEmail} name={"email"} placeHolder={"Email"} id={"1"}  value={email} setValue={setEmail}  />
        <InputIcon classCon={"content-input-icon"} classN={"input-icon"}  type={"password"} img={icoPassword} name={"password"} placeHolder={"Senha"} id={"2"}  value={password} setValue={setPassword}  />
        <ButtonSubmit   text={"Entrar"} />
    </form>
}


