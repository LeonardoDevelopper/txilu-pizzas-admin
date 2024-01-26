import React from "react"
import "./main.css"
import Logo from "../logo/logo"
import { useNavigate } from "react-router-dom"
const Main = () => { 
    const REDIRECT_PAGE = useNavigate()
    React.useEffect(() => {
        setInterval(() => {
            REDIRECT_PAGE("/sigin")
        }, 2000);
    }, [])
    return (
        <main>
            <Logo />
        </main>
    )
}

export default Main   