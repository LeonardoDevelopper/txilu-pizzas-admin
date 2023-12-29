import React from "react"
import "./text.css"
export const SmallTextTomato = ( { text } ) => {
    return<h5 className={ "color-tomato" }>
            { text }
        </h5>
} 

export const MediumTextTomato = ( { text, ...prop } ) => {
    return <h3 style={{...prop}} className={ "color-tomato" }>
            { text }
        </h3>
} 

export const BigTextTomato = ( { text , ...prop} ) => {
    return<h2 style={{...prop}} className={ "color-tomato" }>
            { text }
        </h2>
} 
export const SmallTextWhite = ( { text } ) => {
    return<h5 className= "color-white">
            { text }
        </h5>
} 

export const MediumTextWhite = ( { text } ) => {
    return<h3 className={ "color-white" }>
            { text }
        </h3>
} 

export const BigTextWhite = ( { text } ) => {
    return<h2 className={ "color-white" }>
            { text }
        </h2>
} 

export const SmallTextSilver = ( { text } ) => {
    return<h5 className={ "color-silver" }>
            { text }
        </h5>
} 

export const MediumTextSilver = ( { text } ) => {
    return<h3 className={ "color-silver" }>
            { text }
        </h3>
} 

export const BigTextSilver = ( { text } ) => {
    return<h2 className={ "color-silver" }>
            { text }
        </h2>
} 