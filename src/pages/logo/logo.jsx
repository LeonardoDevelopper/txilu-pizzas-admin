import React from "react"
import Img from "../../components/form/img/img"
import logo from "../../components/svg/txilu-pizzas-logo.svg"
import "./logo.css"
const Logo = () => {
    return (
        <div className="container-logo" >
            <Img path={logo} type={"img-logo-big"} />
        </div>
    )
}

export default Logo