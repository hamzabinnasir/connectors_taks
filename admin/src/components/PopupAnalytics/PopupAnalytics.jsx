import "./popupAnalytics.css"
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';
import FollowerChart from "../LineChart/LineChart.jsx"
import React from "react"
export default function PopupAnalytics({heading, count, tagline, percent}) {
    return (
        <>
            <div className="popupAnalytics">
                <div className="popAnaTotFollDiv">
                    <PersonOutlinedIcon className="popAnaTotFollDivIcon"/>
                    <h4 className="ToFolHead">{heading}</h4>
                    <p>(last 30 Day)</p>
                    <KeyboardArrowDownOutlinedIcon className="PopnaArrDown" />
                </div>
                <h2 className="popAnaTotFoll">{count}</h2>
                <FollowerChart />
                <div className="perecentRevenue">
                    <p className="greenSpan">
                        <NorthEastOutlinedIcon className="greenSpanIcon"/>
                        <span>{percent}</span>
                    </p>
                    <p className="lightPara">{tagline}</p>
                </div>
            </div>
        </>
    )
}