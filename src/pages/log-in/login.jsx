import React from "react"
import { InputIcon } from "../../components/form/components/Input/Input"
import { FormLogin, FormSigin } from "../../components/form/Form"
import Img from "../../components/form/img/img"
import icoLogo from "../../components/svg/txilu-pizzas-logo-white.svg"
import "./login.css"
import { MediumTextTomato } from "../../components/form/components/text/Text"
import { Link } from "react-router-dom"

const Login = () => {
   return (
    <main className="sigin">
    <header>
        <MediumTextTomato text={"Login"} />
    </header>
    <Img path={icoLogo} type={"img-logo-big"} />
    <FormLogin /> 
    
    <div>
        <span>Não tem uma conta? </span>
        <Link to={'/sigin'}>Criar conta </Link>
    </div>
    <div>
        <span>Esqueceu sua senha?</span>
        <Link to={'/admin/request-reset-email'}>Redefinir senha</Link>
    </div>
   </main>
   )
}

export default Login 