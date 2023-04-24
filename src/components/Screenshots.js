import React from "react";
import screenshots from "../styles/screenshots.css"
import ScreenShot from "../img/screenshot.png"

export default function Screenshots(){
    return (
        <div className="screen">
            <section className="screenshots" id="screenshots">
                <p className="title">
                Showcase
                </p>
    
                <p className="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, quam?</p>
                <br/>
                <span className="shots">
                    <span className="shot">
                        <span className="shot__img"></span>
                        <span className="shot__img"></span>
                        <span className="shot__img"></span>
                    </span>
                </span>
                <br/>
            </section>
        </div>
    )
}