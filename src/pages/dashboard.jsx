import React, { useEffect } from "react";
import DashHeader from "../components/partials/DashHeader";
import SecundaryAside from "../components/partials/secudaryAside";
import PrimaryAside from "../components/partials/primaryAside";
import './dashboard.css'
import { useNavigate } from "react-router-dom";
const DashBoard = () => {
    const REDIRECT_TO = useNavigate()
    const TOKEN_ADMIN = JSON.parse(window.localStorage.getItem('TOKEN-ADMIN')) || null
    useEffect(() => {
        if(!TOKEN_ADMIN)
        {
            REDIRECT_TO('/login')

        }

    })
    return (
        <main className="dashboard">
            <DashHeader email={TOKEN_ADMIN? TOKEN_ADMIN.EMAIL : ''} photo={'http://localhost:8080/uploads/txilu-pizzas-logo-no-background.png'} />
            <PrimaryAside />
            <h1>
                DashBoard
            </h1>
        </main>
    )
    
}

export default DashBoard