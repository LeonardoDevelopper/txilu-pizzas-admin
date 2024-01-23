import React, { useEffect } from "react"
import {InputNoIcon, InputIcon, InputPhone} from "./components/Input/Input"
import "./Form.module.css"
import {ButtonNavigate, ButtonSubmit } from "./components/Button/Button"
import icoUser from "../../components/svg/icoUser.svg"
import icoEmail from "../../components/svg/icoEmail.svg"
import icoPassword from "../../components/svg/icoPassword.svg"
import { json, useNavigate } from "react-router-dom"
import { Modal } from "../partials/modal"

export const BASE_URL = 'http://localhost:8080'

const root = document.getElementById('root')

const modal = new Modal()


export const FormSigin = () => {    
    const REDIRECT_TO = useNavigate()
    const [email, setEmail ] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [name, setName] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [submiting, setSubmiting] = React.useState(false)

    function create_user_account(name, email, phone, password) {
        return {
            data:{
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
        fetch(BASE_URL + "/admin/inserts/create-account", 
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

            console.log(response)
            if(response.OK){
                modal.open('success', response.message, root)
                window.localStorage.setItem('TOKEN-ADMIN', JSON.stringify(response.data))

                setTimeout(() => {
                    
                    REDIRECT_TO('/adm/set-location') 
                }, 1000)

            }else{
                modal.open('failure', response.messageError, root)
            }
        })
        .catch((error) => {  
            setSubmiting(false)
            modal.open('failure', error.message, root)
 
 
        })
    }
    return <React.Fragment>
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
    const [any, setAny ] = React.useState("")
    const [password, setPassword] = React.useState("")
    const REDIRECT_TO = useNavigate()


    function get_user_account(any, password) {
        return {
            data:{
                any : any,
                password: password
            }
        }
        
    }

    function HandleSubmit(event){
        event.preventDefault()
        const formData = get_user_account(any, password)
        fetch(BASE_URL + '/admin/selects/get-account', 
        {
            method: "post",
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(response => {
            console.log(response)
            if(response.OK)
            {
                if(response.data)
                    modal.open('success', response.message , root)
                else
                    modal.open('failure', response.message , root)
            }
            else
                modal.open('failure', response.messageError , root)

         }).catch((error)=>  alert("Algo inesperado ocorreu!"))
         .finally(() => console.log("a requisição terminou!"))
            
        }

    return <form className="body-translate" onSubmit={HandleSubmit}>    
        <InputIcon classCon={"content-input-icon"} classN={"input-icon"}  type={"text"} img={icoUser} name={"any"} placeHolder={"Email ou número de telefone"} id={"1"}  value={any} setValue={setAny}  />
        <InputIcon classCon={"content-input-icon"} classN={"input-icon"}  type={"password"} img={icoPassword} name={"password"} placeHolder={"Senha"} id={"2"}  value={password} setValue={setPassword}  />
        <ButtonSubmit   text={"Entrar"} />
    </form>
}


export const FormReset = () => {
    const [email, setEmail ] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [password2, setPassword2] = React.useState("")
    const [submiting, setSubmiting] = React.useState(false)

    useEffect(() => {
        setEmail(JSON.parse(window.localStorage.getItem('admin-email')))
        console.log(email)
    })
    function HandleSubmit() {
        setSubmiting(true)
        fetch(BASE_URL + '/admin/inserts/reset-password', 
        {
            method: "post",
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({email: email, password: password2})
        })
        .then(res => res.json())
        .then(response => {
            console.log(response)
            if(response.OK)
            {
                modal.open('success', response.message , root)
            }else
                modal.open('failure', response.message , root)


         }).catch((error)=>  alert("Algo inesperado ocorreu!"))
         .finally(() => console.log("a requisição terminou!"))
            
    }
    return (
        <form className="body-translate" onSubmit={HandleSubmit}>
        <InputIcon classCon={"content-input-icon"} classN={"input-icon"}  type={"password"} img={icoPassword} name={"password"} placeHolder={"Senha nova"} id={"2"}  value={password} setValue={setPassword}  />
        <InputIcon classCon={"content-input-icon"} classN={"input-icon"}  type={"password"} img={icoPassword} name={"password"} placeHolder={"Repita a senha nova"} id={"2"}  value={password2} setValue={setPassword2}  />
        <ButtonSubmit  text={"Entrar"} />

        </form>
    )
}

export const FormRequestReset = (event) => {
    const [email, setEmail ] = React.useState("")
    const [submiting, setSubmiting] = React.useState(false)
    function HandleSubmit() {
        setSubmiting(true)
        fetch(BASE_URL + '/admin/request-reset-email', 
        {
            method: "post",
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({email: email})
        })
        .then(res => res.json())
        .then(response => {
            console.log(response)
            if(response.OK)
            {
                modal.open('success', response.message , root)
                window.localStorage.setItem('admin-email', JSON.stringify({email : email}))
            }else
                modal.open('failure', response.message , root)


        }).catch((error)=>  alert(error))
         .finally(() => console.log("a requisição terminou!"))
            
    }
    
    return (
        <form className="body-translate" onSubmit={HandleSubmit}>
            <InputIcon classCon={"content-input-icon"} classN={"input-icon"}  type={"email"} img={icoEmail} name={"email"} placeHolder={"Email"} id={"1"}  value={email} setValue={setEmail}  />

            <ButtonSubmit submiting={submiting}  text={"Pedir"} />

        </form>
    )
}