import "./mockup.css"
import React from "react"
import { assets } from "../../assets/assets.js"
export default function Mockup(){
    return(
        <>
        <div className="mockupPage">
            <img src={assets.mockupImg} alt="no img" />
        </div>
        </>
    )
}