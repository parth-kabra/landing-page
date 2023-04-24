import React  from "react";
import download from "../styles/download.css"
import DownloadImg from "../img/download.png"

export default function Download(){
    return(
        <div className="about_banner">
            <section  className="about download" id = "download">
                
                <span className="techs">
                    <span>
                        <img src={DownloadImg} className="about__img download__img"/>
                    </span>
                </span>


                <span className="about__info">

                    <p className="about__title" align="center">Download today</p>
                    
                    <br />
                    <p className="about__text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et soluta numquam exercitationem nam ad libero. Omnis delectus facilis dolores nulla.
                    </p>
                    <br/>
                    <span className="download__btn">
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


            </section>
        </div>
    )
}