import "./popupWidget.css"
import React from "react"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
export default function PopupWidget({ headline, icon, totalCounts, totalPercent, rateArr, success, classname }) {
    return (
        <>
            <div className="popupWidget">
                <div className="popUpWidgetHead">
                    <div className="popWidContext">
                        <h4>{headline}</h4>
                        <p>(Last 30 Day) <span><KeyboardArrowDownOutlinedIcon className="popupWidgetArrDown" /></span></p>
                    </div>
                    <span>{icon}</span>
                </div>

                <h2 className="popWidTotCounts">{totalCounts}</h2>
                <div className="successDiv">
                    <p style={classname === "red"? {color: "red"}: {color: "#05BA06"}} className="iconSpan">
                        <span>{rateArr}</span>
                        <span className="percent">{totalPercent}</span>
                    </p>
                    <p className="success">{success}</p>
                </div>
            </div>
        </>
    )
}