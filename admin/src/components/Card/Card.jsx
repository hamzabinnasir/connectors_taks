import "./card.css"
import React, { useContext } from "react"
import dashboardContext from "../../context/dashboardContext.js";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FaTiktok } from "react-icons/fa";
import InstagramIcon from '@mui/icons-material/Instagram';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
function Card({ imgSrc, name, gender, address, followers, minAdverCost, maxAdverCost, displayPopup }) {
    const { currency, setDisplayPopup } = useContext(dashboardContext);

    return (
        <>
            <div onClick={() => setDisplayPopup(true)} className="cardDiv">
                <div className="cardImgDiv">
                    <img src={imgSrc} alt="no img" />
                </div>
                <div className="cardBoxContent">
                    <div className="mainDetailsDiv">
                        <div className="nameAndAddress">
                            <div className="cardName">
                                <p>{name}</p>
                                <div className="dot"></div>
                            </div>
                            <div className="addressAndGen">
                                <span>{gender}</span>,
                                <span>{address}</span>
                            </div>
                        </div>

                        <div className="followersCount">
                            <p>{followers}</p>
                            <p className="folloTxt">Followers</p>
                        </div>
                    </div>

                    <div className="iconsAndFitness">
                        <div className="iconsDiv">
                            <YouTubeIcon className="iconDivIcon" />
                            <FaTiktok className="iconDivIcon" />
                            <InstagramIcon className="iconDivIcon" />
                        </div>
                        <button className="fitnessBtn">Fitness</button>
                    </div>

                    <div className="advtCostDiv">
                        <div className="adctCostContext">
                            <p>Est. Advertising Cost</p>
                            <p className="advtCostPara">
                                <span>{currency}{minAdverCost}</span>
                                -
                                <span>{currency}{maxAdverCost}</span>
                            </p>
                        </div>
                        <BookmarkBorderOutlinedIcon className="bookMarkIcon" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Card);