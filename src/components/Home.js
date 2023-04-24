import React from "react";
import HomeImg from "../img/home.png"
import HomeCss from "../styles/home.css"

export default function Home(){
    return (
        <>
        <span className="gap"></span>
        <section className="home" id="home">
        <span className="home__text">
                <p className="home__title">Best way to promote <br/>your app!</p>
                <span>
                    <p className="home__child__text">With this amazing template</p>
                </span>
                <br/>
                <span>
                <a className="button" href="#">
                    <i class='bx bxl-apple'></i>
                    App Store
                </a>
                <a className="button" href="#">
                    <i class='bx bxl-play-store' ></i>
                    Google Play
                </a>
                </span>
            </span>
            <img src={HomeImg} className="home__img about__img" style={{borderRadius:"20px"}}/>

        </section>
    </>
    )
}