import "./dashboardHeader.css"
import React, { useContext } from "react"
import { assets } from "../../assets/assets.js"
import { Menu } from "lucide-react"
import dashboardContext from "../../context/dashboardContext.js"

export default function DashboardHeader() {
    const { setSidebarOpen } = useContext(dashboardContext);

    return (
        <>
            <div className="dashboardHeader">
                <button className="mobileMenuBtn" onClick={() => setSidebarOpen(prev => !prev)}>
                    <Menu size={24} />
                </button>
                <img id="logoImg" src={assets.dashboardLogo} alt="no img" />
                <h2>Creator Connect</h2>
            </div>
        </>
    )
}