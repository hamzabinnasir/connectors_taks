import dashboardContext from "./dashboardContext.js";
import React, { useState } from "react"
export default function DashboardContextProvider({ children }) {
    const [displayPopup, setDisplayPopup] = useState(false);
    const [followersRange, setFollowersRange] = useState([25, 75]);
    const [costRange, setCostRange] = useState([25, 75]);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const currency = "$";
    const contextValue = {
        followersRange,
        setFollowersRange,
        costRange,
        setCostRange,
        currency,
        displayPopup,
        setDisplayPopup,
        sidebarOpen,
        setSidebarOpen,
    }
    return (
        <dashboardContext.Provider value={contextValue}>
            {children}
        </dashboardContext.Provider>
    )
}


