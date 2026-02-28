import "./stepCard.css"
import React from "react"
export default function StepCard({ heading, imgSrc, headline, tagline }) {
    return (
        <>
            <div className="stepCard">
                <h1>{heading}</h1>
                <span className="cardImg">{imgSrc}</span>
                <h2>{headline}</h2>
                <p>{tagline}</p>
            </div>
        </>
    )
}