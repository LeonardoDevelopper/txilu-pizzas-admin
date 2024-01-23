import React from "react"
import "./img.css"
const Img = ({type, path, title, ...prop}) => {
    return <img  className={type} src={path} alt={title} />

}

export default Img