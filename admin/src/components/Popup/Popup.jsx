import "./popup.css"
import React, { useContext, useEffect, useRef } from "react"
import dashboardContext from "../../context/dashboardContext.js"
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import Person3Icon from '@mui/icons-material/Person3';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { FaInstagram } from "react-icons/fa";
import PopupCard from "../PopupCard/PopupCard.jsx";
import PopupAnalytics from "../PopupAnalytics/PopupAnalytics.jsx";
import { popupWidgetData } from "./popupWidgetData.js";
import PopupWidget from "../PopupWidget/PopupWidget.jsx";
import FollowerChart from "../LineChart/LineChart.jsx"
import { assets } from "../../assets/assets.js"
import SliderBar from "../Slider/Slider.jsx"
export default function Popup() {
    const { displayPopup, setDisplayPopup, currency } = useContext(dashboardContext);
    const popupRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setDisplayPopup(false);
            }
        }

        if (displayPopup) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [displayPopup, setDisplayPopup]);

    if (!displayPopup) return null;
    return (
        <>
            {
                displayPopup === true ?
                    <div className="popup" ref={popupRef}>
                        <div onClick={() => setDisplayPopup(false)} className="closeIconDiv">
                            <CloseIcon className="closeIcon" />
                        </div>
                        <div className="popupContainer">
                            {/* Popup Left */}
                            <div className="popupLeft popupDiv">
                                <img src={assets.bodyBuilder} alt="no img" />
                                <p className="fitnessBadge">Fitness</p>
                                <p className="connectorName">Simeon Panda <span className="criDiv"></span></p>
                                <p className="genderAndAddress">
                                    <span>Male, </span>
                                    <span>Los Angeles</span>
                                </p>
                                <p className="conDes">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Totam molestias eligendi, ab velit earum consequatur?</p>
                                <div className="conBtnAndBookMark">
                                    <BookmarkBorderOutlinedIcon className="bookMarIconcobt" />
                                    <button className="contCreatBtn">Contact Creator</button>
                                </div>

                                <div className="conAddsDiv">
                                    <p className="activeAddPara">Active Ads: <span>0</span></p>
                                    <p className="nonAvtDiv">Non Active</p>
                                </div>

                                <div className="popupPreview"></div>
                                <div className="ArrowBtnContainer">
                                    <KeyboardArrowLeftIcon className="activeArr arrIconAvtCo" />
                                    <KeyboardArrowRightIcon className="arrIconAvtCo" />
                                </div>
                            </div>
                            {/* Popup Right */}
                            <div className="popupRight popupDiv">
                                <div className="popupTop">
                                    <div className="popTopLeft popupTopDiv">
                                        <PopupCard />
                                        <div className="PopupRightAdvtDiv">
                                            <p>Est. Advertising Cost</p>
                                            <h4>{currency}<span>1200</span>-{currency}<span>1500</span></h4>
                                        </div>
                                    </div>
                                    <div className="popTopRight popupTopDiv">
                                        <PopupAnalytics heading={"Total Followers"} count={"12.8k"} tagline={"More Followers Growth"} percent={"22%"}/>
                                        <PopupAnalytics heading={"Total Views"} count={"22.8k"} tagline={"Increase Audience Views"} percent={"34%"}/>
                                    </div>
                                </div>

                                <div className="popupBottom">
                                    <div className="popupRightBottomRowOne">
                                        {
                                            popupWidgetData.map((dataItem) =>
                                                <PopupWidget key={dataItem.id} headline={dataItem.headline} icon={dataItem.icon} totalCounts={dataItem.totalCounts} totalPercent={dataItem.totalPercent} rateArr={dataItem.rateArr} success={dataItem.success} classname={dataItem.className} />
                                            )
                                        }
                                    </div>

                                    <div className="popupBottomRow">
                                        <div className="avgCard acgCardOne">
                                            <div className="avgCardOneContext">
                                                <h4 className="headline">Average Engagement Rate</h4>
                                                <div className="avgCardOneDiv">
                                                    <div className="acgCoDivO">
                                                        <p className="avgCardP">(Last 30 Day)</p>
                                                        <KeyboardArrowDownOutlinedIcon className="avgCardIcon" />
                                                    </div>
                                                    <div className="acgCoDivO">
                                                        <FaInstagram className="avgCardIconInsta" />
                                                        <p className="avgCardP ">Instagram</p>
                                                    </div>
                                                </div>

                                                <div className="LcAndOthers">
                                                    <div className="lcAndOtherContext">
                                                    <h2 className="count">1,4280</h2>
                                                    <p className="greenSpan">
                                                        <NorthEastOutlinedIcon className="greenSpanIcon" />
                                                        <span>34%</span>
                                                    </p>
                                                    </div>
                                                    <FollowerChart />
                                                </div>
                                                <div className="straightDiv">
                                                    <div className="straightDivOne stDivChild">
                                                    <p>From Followers</p>
                                                    <span className="spanSeven">
                                                        750
                                                    </span>
                                                    <p className="greenSpanSmall">
                                                        <NorthEastOutlinedIcon className="greenSpanIcon" />
                                                        <span>34%</span>
                                                    </p>
                                                    </div>
                                                    <div className="straightDivTwo stDivChild">
                                                    <p>Form UnFollowers</p>
                                                    <span className="spanSeven">
                                                        750
                                                    </span>
                                                    <p className="greenSpanSmall">
                                                        <NorthEastOutlinedIcon className="greenSpanIcon" />
                                                        <span>34%</span>
                                                    </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="avgCard acgCardTwo">
                                            <h4>Target Audience</h4>
                                            <p className="avgCardP">Gender</p>

                                            <div className="barsBox">
                                                <div className="barBoxDiv">
                                                    <div className="sdbContext">
                                                        <div className="personDiv">
                                                            <Person3Icon className="personIcon"/>
                                                            <span>Male</span>
                                                        </div>
                                                        <div className="personDivT">
                                                            <p className="pbold">
                                                                11k
                                                            </p>
                                                            <p className="pPercent">
                                                                65%
                                                            </p>
                                                        </div>
                                                    </div>
                                                <SliderBar />
                                                </div>
                                                <div className="barBoxDiv barBoxDiv2">
                                                    <div className="sdbContext">
                                                        <div className="personDiv">
                                                            <Person3Icon className="personIcon"/>
                                                            <span>Female</span>
                                                        </div>
                                                        <div className="personDivT">
                                                            <p className="pbold">
                                                                7k
                                                            </p>
                                                            <p className="pPercent">
                                                                45%
                                                            </p>
                                                        </div>
                                                    </div>
                                                <SliderBar />
                                                </div>
                                            </div>

                                            <div className="othersDiv">
                                                <p>Others</p>
                                                <span>05</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    ""
            }
        </>
    )
}