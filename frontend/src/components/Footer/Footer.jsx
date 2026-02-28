import "./footer.css"
import React from "react"
import { assets } from "../../assets/assets"
import { FaTiktok } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="footerImgDiv">
                    <img src={assets.logo} alt="no img" />
                </div>

                <ul className="footerListContainer">
                    <h3 className="ulConHead">COMPANY</h3>
                    <p className="ulContList">About Us</p>
                    <p className="ulContList">Support</p>
                    <p className="ulContList">Contact Us</p>
                </ul>
                <ul className="footerListContainer">
                    <h3 className="ulConHead">TOOLS</h3>
                    <p className="ulContList">Product Database</p>
                    <p className="ulContList">Competitor Research</p>
                    <p className="ulContList">Sales Tracker</p>
                    <p className="ulContList">Top Stores</p>
                    <p className="ulContList">Ads Spy</p>
                </ul>
                <ul className="footerListContainer">
                    <h3 className="ulConHead">Resources</h3>
                    <p className="ulContList">Community</p>
                    <p className="ulContList">Blogs</p>
                    <p className="ulContList">Documentation</p>
                    <p className="ulContList">Pricing</p>
                </ul>
                <div className="footerUpdateDiv">
                    <h3 className="ulConHead">Latest Update</h3>
                    <div className="inputBox">
                        <input type="text" placeholder="email" />
                        <button className="footerSubmit">Submit</button>
                    </div>
                    <div className="iconsContainer">
                        <FaDiscord className="footerIcon"/>
                        <FaTiktok className="footerIcon"/>
                        <FaLinkedin className="footerIcon"/>
                        <RiInstagramFill className="footerIcon"/>
                        <FaYoutube className="footerIcon"/>
                    </div>
                </div>
            </footer>
        </>
    )
}