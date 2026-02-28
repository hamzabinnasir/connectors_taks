import "./sidebar.css"
import React, { useContext, useState } from "react"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { FiSettings } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { X } from "lucide-react";
import dashboardContext from "../../context/dashboardContext.js";
import {
    TbChartInfographic as ProductIntelligence,
    TbDatabase as ProductDatabase,
    TbCrown as TopProducts,
    TbBellRinging as RevivalAlerts,
    TbChartArcs as MarketIntel,
    TbSearch as CompetitionResearch,
    TbEye as AdsSpy,
    TbClock as StoreTimeMachine,
    TbGrowth as GrowthSales,
    TbReceipt2 as SalesTracker,
    TbBuildingStore as TopStores,
    TbUsers as CreatorConnect,
    TbPhoto as UGCDiscovery,
    TbUserSearch as AudienceMatchmaking
} from 'react-icons/tb';

export default function Sidebar() {
    const { sidebarOpen, setSidebarOpen } = useContext(dashboardContext);
    const [openDropdowns, setOpenDropdowns] = useState({
        productIntel: true,
        marketIntel: true,
        growthSales: true,
        creatorConnect: true
    });

    const toggleDropdown = (section) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <>
            <div className={sidebarOpen ? "sidebarOverlay show" : "sidebarOverlay"} onClick={() => setSidebarOpen(false)}></div>
            <div className={sidebarOpen ? "sideBar show" : "sideBar"}>
                <div className="sidebarHeaderMobile">
                    <h3>Menu</h3>
                    <button className="closeMenuBtn" onClick={() => setSidebarOpen(false)}>
                        <X size={24} />
                    </button>
                </div>
                <div className="profileBox">
                    <div className="profilePicCirlce"></div>
                    <div className="profileBoxCont">
                        <h4>Hamza</h4>
                        <p>Platinum Plan</p>
                    </div>
                    <KeyboardArrowDownIcon className="arrowDown" />
                </div>

                <div className="darkThemeBox">
                    <div className="drkThDiv themeToggleDiv">
                        <div className="drkThDivCon">
                            <DarkModeOutlinedIcon className="themeIcon icon" />
                            <p>Dark theme</p>
                        </div>
                        <ToggleSwitch />
                    </div>
                    <div className="drkThDiv">
                        <FiSettings className="settingIcon icon" />
                        <p>Settings</p>
                    </div>
                    <div className="drkThDiv">
                        <TbLogout2 className="logoutBtn icon" />
                        <p className="logoutBtn">Logout</p>
                    </div>
                </div>

                {/* Sidebar ul container */}
                <div className="SideBarUlContainer">
                    <div className="ulHead">
                        <GridViewOutlinedIcon className="icon dashboardIcon" />
                        <p>Dashboard</p>
                    </div>
                    {/* Sidebar UL */}
                    <div className="sideBarUl">
                        <div className="sideUlLiArr" onClick={() => toggleDropdown('productIntel')}>
                            <div className="sideUlLiArrDiv">
                                <ProductIntelligence className="icon" />
                                <p>Product Intelligence</p>
                            </div>
                            <KeyboardArrowDownIcon className={openDropdowns.productIntel ? "arrowDown rotate" : "arrowDown"} />
                        </div>
                        <div className={openDropdowns.productIntel ? "dropdownContent show" : "dropdownContent"}>
                            <div className="sideUlLi">
                                <ProductDatabase className="icon" />
                                <p>Product Database</p>
                            </div>
                            <div className="sideUlLi">
                                <TopProducts className="icon" />
                                <p>Top Products</p>
                            </div>
                            <div className="sideUlLi">
                                <RevivalAlerts className="icon" />
                                <p>Revival Alerts</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar UL */}
                    <div className="sideBarUl">
                        <div className="sideUlLiArr" onClick={() => toggleDropdown('marketIntel')}>
                            <div className="sideUlLiArrDiv">
                                <MarketIntel className="icon" />
                                <p>Market Intel</p>
                            </div>
                            <KeyboardArrowDownIcon className={openDropdowns.marketIntel ? "arrowDown rotate" : "arrowDown"} />
                        </div>
                        <div className={openDropdowns.marketIntel ? "dropdownContent show" : "dropdownContent"}>
                            <div className="sideUlLi">
                                <CompetitionResearch className="icon" />
                                <p>Competition Research</p>
                            </div>
                            <div className="sideUlLi">
                                <AdsSpy className="icon" />
                                <p>Ads Spy</p>
                            </div>
                            <div className="sideUlLi">
                                <StoreTimeMachine className="icon" />
                                <p>Store Time Machine</p>
                            </div>
                        </div>
                    </div>


                    {/* Sidebar UL */}
                    <div className="sideBarUl">
                        <div className="sideUlLiArr" onClick={() => toggleDropdown('growthSales')}>
                            <div className="sideUlLiArrDiv">
                                <GrowthSales className="icon" />
                                <p>Growth & Sales</p>
                            </div>
                            <KeyboardArrowDownIcon className={openDropdowns.growthSales ? "arrowDown rotate" : "arrowDown"} />
                        </div>
                        <div className={openDropdowns.growthSales ? "dropdownContent show" : "dropdownContent"}>
                            <div className="sideUlLi">
                                <SalesTracker className="icon" />
                                <p>Sales Tracker</p>
                            </div>
                            <div className="sideUlLi">
                                <TopStores className="icon" />
                                <p>Top Stores</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar UL */}
                    <div className="sideBarUl">
                        <div className="sideUlLiArr" onClick={() => toggleDropdown('creatorConnect')}>
                            <div className="sideUlLiArrDiv">
                                <CreatorConnect className="icon" />
                                <p>Creator Connect</p>
                            </div>
                            <KeyboardArrowDownIcon className={openDropdowns.creatorConnect ? "arrowDown rotate" : "arrowDown"} />
                        </div>
                        <div className={openDropdowns.creatorConnect ? "dropdownContent show" : "dropdownContent"}>
                            <div className="sideUlLi">
                                <UGCDiscovery className="icon" />
                                <p>UGC Discovery</p>
                            </div>
                            <div className="sideUlLi">
                                <AudienceMatchmaking className="icon" />
                                <p>Audience Matchmaking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}