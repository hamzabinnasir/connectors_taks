import "./dashboard.css"
import React, { useContext } from "react"
import dashboardContext from "../../context/dashboardContext.js"
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader.jsx"
import RangeSlider from "../../components/RangeSlider/RangeSlider.jsx"
import { cardData } from "./cardsData.js"
import Card from "../../components/Card/Card.jsx"
import Popup from "../../components/Popup/Popup.jsx"
export default function Dashboard() {
    const { followersRange, costRange, displayPopup } = useContext(dashboardContext);
    const [minFol, maxFol] = followersRange;
    const [minCost, maxCost] = costRange;
    return (
        <>
            <div className={displayPopup ? "dashBoardContainer blurred" : "dashBoardContainer"}>
                <Sidebar />
                {/* Main Content */}
                <div className="mainContent">
                    <DashboardHeader />
                    <form className="dashboardControolerForm">
                        {/* Form Grid Row */}
                        <div className="forWidgetRowOne formGridRow">
                            <div className="widget proNaWidg">
                                <p>Product Name</p>
                                <input type="text" />
                            </div>
                            <div className="widget follWidg rangeWidget">
                                <div className="follWidgHead">
                                    <p>Followers</p>
                                    <p className="limitPara">{minFol}k-{maxFol}k</p>
                                </div>
                                <RangeSlider type={"followers"} />
                                <div className="minMaxDiv">
                                    <span>Min</span>
                                    <span>Max</span>
                                </div>
                            </div>

                            <div className="widget langAndConWidget">
                                <div className="selectField countrySelect">
                                    <p>Target Country</p>
                                    <select id="seleField counSeleFie">
                                        <option disabled selected>- Select -</option>
                                        <option value="pakistan">Pakistan</option>
                                        <option value="unitedStates">United States</option>
                                        <option value="canada">Canada</option>
                                        <option value="unitedKingdom">United Kingdom</option>
                                        <option value="india">India</option>
                                    </select>
                                </div>
                                <div className="selectField languageSelect">
                                    <p>Language</p>
                                    <select id="seleField counSeleFie">
                                        <option disabled selected>- Select -</option>
                                        <option value="pakistan">English</option>
                                        <option value="unitedStates">Urdu</option>
                                        <option value="canada">French</option>
                                        <option value="unitedKingdom">German</option>
                                        <option value="india">Chinese</option>
                                    </select>
                                </div>
                            </div>

                            <div className="widget follWidg rangeWidget">
                                <div className="follWidgHead">
                                    <p>Influencer Cost</p>
                                    <p className="limitPara">{minCost}k-{maxCost}k</p>
                                </div>
                                <RangeSlider type={"influencerCost"} />
                                <div className="minMaxDiv">
                                    <span>Min</span>
                                    <span>Max</span>
                                </div>
                            </div>
                        </div>

                        {/* Form Grid Row */}
                        <div className="forWidgetRowTwo formGridRow">
                            <div className="widget proDesWidget">
                                <p>Product Description</p>
                                <input type="text" />
                            </div>
                            <div className="widget proTarAud">
                                <p>Target Audience</p>
                                <div className="radioGroup">
                                    <div className="radioBtnDiv">
                                        <input type="radio" id="male" name="hello" />
                                        <label htmlFor="male">Male</label>
                                    </div>
                                    <div className="radioBtnDiv">
                                        <input type="radio" id="female" name="hello" />
                                        <label htmlFor="female">Female</label>
                                    </div>
                                    <div className="radioBtnDiv">
                                        <input type="radio" id="mixed" name="hello" />
                                        <label htmlFor="mixed">Mixed</label>
                                    </div>
                                </div>
                            </div>

                            <div className="widget nicheWidget">
                                <p>Described niches</p>
                                <select>
                                    <option value="" disabled selected hidden>- Select -</option>
                                    <option value="opt1">option1</option>
                                    <option value="opt1">option2</option>
                                    <option value="opt1">option3</option>
                                </select>
                            </div>
                        </div>

                        <div className="buttonsDiv">
                            <button className="cancelBtn">Cancel</button>
                            <button className="submitBtn" type="submit">Submit</button>
                        </div>
                    </form>

                    {/* Cards Container */}
                    <div className="dashCardsSection">
                        <h2>Top Results</h2>
                        <div className="dashCardContainer">
                            {
                                cardData.map((cardItem) =>
                                    <Card key={cardItem.id} imgSrc={cardItem.imgSrc} name={cardItem.name} gender={cardItem.gender} address={cardItem.address} followers={cardItem.followers}
                                        minAdverCost={cardItem.minAdverCost} maxAdverCost={cardItem.maxAdverCost} id
                                        ={cardItem.id} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Popup />
        </>
    )
}