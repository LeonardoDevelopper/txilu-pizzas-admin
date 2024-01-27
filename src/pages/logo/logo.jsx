import React from "react"
import Img from "../../components/form/img/img"
import logo from "../../components/svg/txilu-pizzas-logo-white.svg"
import "./logo.css"
const Logo = () => {
    return (
        <div className="container-logo" >
            <Img path={'http://192.168.130.241:8080/uploads/pizzas/6f61884e-6ae4-4989-bada-93762983e9b2.jpeg'} type={"img-logo-big"} />
        </div>
    )
}

export default Logo