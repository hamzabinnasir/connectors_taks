import "./landingPage.css"
import React from "react"
import Navbar from "../../components/Navbar/Navbar.jsx"
import Hero from "../../components/Hero/Hero.jsx"
import Mockup from "../../components/Mockup/Mockup.jsx"
import Steps from "../../components/Steps/Steps.jsx"
import Footer from "../../components/Footer/Footer.jsx"
export default function LandingPage(){
    return(
        <>
        <div className="landingPage">
            <Navbar />
            <Hero />
            <Mockup />
            <Steps />
            <Footer/>
        </div>
        </>
    )
}