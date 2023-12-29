import React from "react"
import "./Input.css"
import { Img } from "../Img/Img"
import { SmallTextSilver } from "../text/Text"
export const InputNoIcon = ({type,  id, value, placeHolder, setValue ,...prop}) => {
    return <input required style={{...prop}} className="input" type={type} placeholder={placeHolder} value={value} onChange={({target}) => setValue(target.value) }/>
}

export const InputIcon =  ({classN, classCon , type, img , name,  id, placeHolder ,value, setValue ,...prop}) => {
    return(
        <div style={{...prop}} className={classCon}>
            
            <div style={
                {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width:"38px",
                }
            }>
                <Img type={"icoSearch"} path ={img} name={name+"photo"} />

            </div>
            <input required name={name}  className={classN} type={type} placeholder={placeHolder} value={value} onChange={({target}) => setValue(target.value) }/>
        </div>
    ) 
    
}

export const InputPhone =  ({classN, type, img , name,  id, placeHolder ,value, setValue ,...prop}) => {
    return(
        <div style={{...prop}} className={"inputPhone"}>
            
            <span style={{fontSize: "12px", color: "dimgray"}}>+244</span>
            <input required name={name}  className={classN} type={type} placeholder={placeHolder} value={value} onChange={({target}) => setValue(target.value) }/>
        </div>
    ) 
    
}
