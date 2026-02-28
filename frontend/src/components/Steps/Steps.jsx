import "./steps.css"
import React from "react"
import StepCard from "../StepCard/StepCard.jsx"
import stepsData from "./stepsData.js"
export default function Steps() {
    return (
        <>
            <div className="stepsPage">
                <h1 className="stepsPageHead"><span>3</span> Simple Steps</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et purus dolor. Nullam <br />venenatis volutpat orci a lacinia. Proin imperdiet sollicitudin nunc ultrices luctus.</p>

                <div className="stepsCardContainer">
                    {
                        stepsData.map((cardItem) =>
                            <StepCard key={cardItem.id} heading={cardItem.heading} imgSrc={cardItem.imgSrc} headline={cardItem.headline} tagline={cardItem.tagline}/>
                        )
                    }
                </div>
            </div>
        </>
    )
}