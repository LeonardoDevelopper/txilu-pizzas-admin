import React from "react"
import "./Button.css"
import { Img } from "../Img/Img" 
import { Navigate, useNavigate } from "react-router-dom"
import { MediumTextSilver, MediumTextTomato, SmallTextSilver } from "../../../form/components/text/Text"
import { Modal } from "../../../partials/modal"

const alert = new Modal()
const root = document.getElementById('root')

export const ButtonNavigate = ({ fun, id, text, where, ...prop}) => {
    const Navigate = useNavigate()
    return <button onClick={ () => {fun(); Navigate(`/${where}`)}} className="btn-default"  style={{...prop}}>{text}</button>  
    
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

    return <button type="button" disabled={location} onClick={() => fun()} style={{...prop}} className= {location ? "btn-default-disabled": "btn-default"}> 
    {text} {photo}
     </button>

}

export const ButtonSetIgradient = ( { igre, igres, text, fun, } ) => {
    const handle = () => {
        const index = igres.findIndex(el => el == igre)
        if(index == -1)
        {
            fun([...igres, igre])

        }else{
            alert.open('failure', 'Este igrediente já existe', root)
        }

    }

    return <button type="button" onClick={() => handle()} className= {"btn-default"}> 
    {text}
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

export const ButtonAside = ({src, text, selected, fun}) => {
    const [select, setSelect]  = React.useState(selected)

    return (<button id={text} onClick={ ({target}) => { 

        fun(target.id)
        setSelect(true)
     }} className={select ? 'btn-aside-selected' : 'btn-aside'}>
        <Img id={text} path={src} type={'ico'} />
        <h3 id={text} className={select ? 'white' : 'silver'}>{text}</h3>
        <h1 id={text} className="fill"></h1>
    </button>
    )
}

export const ButtonAside2 = ({src, text, selected, fun}) => {
    const [select, setSelect]  = React.useState(selected)

    return (<button id={text} onClick={ ({target}) => { 

        fun(target.id)
        setSelect(true)
     }} className={select ? 'btn-aside2-selected' : 'btn-aside2'}>
        <Img id={text} path={src} type={'ico'} />
        <h3 id={text} className={select ? 'tomato' : 'silver'}>{text}</h3>
        <h1 id={text} className="fill"></h1>
    </button>
    )
}

export const ButtonNav = ({ text, selected, fun}) => {
    const [select, setSelect]  = React.useState(selected)
    const parent = document.getElementById('primaryAside')

    return (<button id={text} onClick={ ({target}) => { 

        fun(target.id)
        setSelect(true)
     }} className={select ? 'btn-nav-selected' : 'btn-nav'}>
        <h3 id={text} className={select ? 'tomato' : 'silver'}>{text}</h3>
    </button>
    )
}