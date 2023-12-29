import React from "react"
import { SmallTextWhite } from "../../components/text/Text"
import "./Img.css"
export const Img = ({path, title, name, type, ...prop}) => {
    return <img className={type} src={path} alt={title} {...prop} />

}

export const loadingIcon = ({ path, title, name, type}) => {
    return(
    <section className = {type} >
        <img className={type} src={path} alt={title}/>
        <SmallTextWhite text="Carregando"/>
    
    </section>)

}
