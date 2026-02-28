import "./popupCard.css"
import React from "react"
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { TbLocationShare } from "react-icons/tb";
import { assets } from "../../assets/assets"
export default function popupCard() {
    return (
        <>
            <div className="popupCard">
                <div className="popCardProfilBox">
                    <img src={assets.bodyBuilder} alt="no img" />
                    <div className="pcpContext">
                        <p className="pcpName">Simeon Panda</p>
                        <p className="pcpDate">April 25, 2025</p>
                    </div>
                </div>

                <div className="pspPreview">
                    <p className="pcpSponsar">Top Sponsar Post</p>
                </div>

                <div className="pcpContextContainer">
                    <div className="pcpConConLi firstLi">
                        <div className="pcpTotLikDiv">
                            <p className="pcpTotLikesPa">Total Like</p>
                            <p className="pcpTotLikes">550k</p>
                        </div>
                        <FavoriteBorderRoundedIcon className="pcpIcon"/>
                    </div>
                    <div className="pcpConConLi secondLi">
                        <div className="pcpTotLikDiv">
                            <p className="pcpTotLikesPa">Total Share</p>
                            <p className="pcpTotLikes">11.7k</p>
                        </div>
                        <TbLocationShare  className="pcpIcon"/>
                    </div>
                    <div className="pcpConConLi lastLi">
                        <div className="pcpTotLikDiv">
                            <p className="pcpTotLikesPa">Total Comments</p>
                            <p className="pcpTotLikes">11.7k</p>
                        </div>
                        <ChatBubbleOutlineOutlinedIcon  className="pcpIcon"/>
                    </div>
                </div>
            </div>
        </>
    )
}