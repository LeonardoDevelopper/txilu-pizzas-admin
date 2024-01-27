import React from "react"
import Img from "../../components/form/img/img"
import logo from "../../components/svg/txilu-pizzas-logo-white.svg"
import "./logo.css"
const Logo = () => {
    return (
        <div className="container-logo" >
            <Img path={'http://localhost:8080/uploads/txilu-pizzas-logo-no-background.png'} type={"img-logo-big"} />
        </div>
    )
}

export default Logo