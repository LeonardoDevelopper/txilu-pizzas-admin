import React from "react"
import "./Button.css"
import { Img } from "../Img/Img" 
import { Navigate, useNavigate } from "react-router-dom"
import { MediumTextSilver, MediumTextTomato, SmallTextSilver } from "../../../form/components/text/Text"

export const ButtonNavigate = ({ fun, id, text, where, ...prop}) => {
    const Navigate = useNavigate()
    return <button onClick={ () => Navigate(`/${where}`)} className="btn-default"  style={{...prop}}>{text}</button>  
    
}
export const ButtonNavigateIcon = ({photo, text, where}) => {
    const Navigate = useNavigate()
    return <button className="btn-navigate-icon" onClick={() => Navigate(`/${where}`)}> {text} <Img type={"ico"} path={photo} /> </button>
}
export const ButtonIcon = ( { type, id, fun, photo } ) => {
    return <button onClick={() => fun}  className="btn-icon"> <Img type={ type ? type : "ico"} path={photo} /> </button>

}
export const ButtonIconCircle = ( { text, id, fun, photo, ...prop } ) => {

    return <button onClick={() => fun} style={{...prop}} className="btn-circle">
        {text} {photo}
     </button>

}

export const ButtonDefault = ( { location, text, id, fun, photo, ...prop } ) => {

    return <button disabled={location} onClick={() => fun()} style={{...prop}} className= {location ? "btn-default-disabled": "btn-default"}> 
    {text} {photo}
     </button>

}


export const ButtonSubmit = ({ submiting, id, text, ...prop}) => {
    
    return <button disabled={submiting} className={submiting ? "btn-default-disabled": "btn-default"}  style={{...prop}}><strong>{text}</strong></button>  
    
}
export const ButtonNoIcon = ({text, fun , ...prop}) => {
    return <button onClick={() => fun()} style={{...prop}} className="btn-no-icon"> {text} </button>
}

export const ButtonIcoText = ({ico1, text, ico2, where}) => {
    const Navigate = useNavigate()
    return <button className="ButtonIcoText" onClick={() => Navigate(`/${where}`) }>
        <div  className="-ico-">
            <Img type={"ico"} path={ico1} />

        </div>
        <div className="text">
            <MediumTextTomato text={text} />
        </div>
        <div className="reverse">
            <Img type={"arrow-reverse"} path={ico2} />

        </div>

    </button>
}
export const ButtonCount = ({ disabled, text, fun, ...prop}) =>{
    return <button disabled = {disabled} onClick={() => fun()} style={{...prop}}>{text}</button>
}