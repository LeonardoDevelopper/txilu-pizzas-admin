import React from "react"
import { InputIcon } from "../../components/form/components/Input/Input"
import { FormLogin, FormSigin } from "../../components/form/Form"
import Img from "../../components/form/img/img"
import icoLogo from "../../components/svg/txilu-pizzas-logo-white.svg"
import "./sigin.css"
import { MediumTextTomato } from "../../components/form/components/text/Text"
import { Link } from "react-router-dom"
const Sigin = () => {
   return (
       <main className="sigin">
        <header>
            <MediumTextTomato text={"Sigin"} />
        </header>
        <Img path={icoLogo} type={"img-logo-big"} />
        <FormSigin /> 
        
        <div>
            <span>já tem uma conta? </span>
            <Link to={'/login'}>Fazer Login </Link>
        </div>
       </main>
   )
} 

export default Sigin