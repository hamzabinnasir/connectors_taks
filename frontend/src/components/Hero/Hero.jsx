import "./hero.css"
import React from "react"
export default function Hero() {
    return (
        <>
            <div id="heroSection" className="heroSection">
                <div className="newToolsWidget">
                    <p className="newP">New</p>
                    <p className="toolsP">Tools</p>
                </div>
                <h1 id="mainHead">Connect With Top Creators <br />And Boost Your Brand With <br />Our <span>Creator Connect</span> Tool.</h1>
                <p className="mainPara">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et purus dolor. Nullam <br />
                    venenatis volutpat orci a lacinia. Proin imperdiet sollicitudin nunc ultrices luctus.
                </p>
            </div>
        </>
    )
}