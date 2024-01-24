import React from "react";
import DashHeader from "../components/partials/DashHeader";
import SecundaryAside from "../components/partials/secudaryAside";
import PrimaryAside from "../components/partials/primaryAside";
import './dashboard.css'
const DashBoard = () => {
    return (
        <main className="dashboard">
            <DashHeader />
            <PrimaryAside />
            <SecundaryAside />
            <h1>
                DashBoard
            </h1>
        </main>
    )
}

export default DashBoard