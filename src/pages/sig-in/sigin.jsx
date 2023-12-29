import React from "react"
import { InputIcon } from "../../components/form/components/Input/Input"
import { FormSigin } from "../../components/form/Form"
import Img from "../../components/form/img/img"
import icoLogo from "../../components/svg/txilu-pizzas-logo-white.svg"
import "./sigin.css"
import { MediumTextTomato } from "../../components/form/components/text/Text"
const Sigin = () => {
   return (
       <main>
        <header>
            <MediumTextTomato text={"Sigin"} />
        </header>
        <Img path={icoLogo} type={"img-logo-big"} />
        <FormSigin />
       </main>
   )
}

export default Sigin