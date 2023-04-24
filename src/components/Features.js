import React  from "react";
import features from "../styles/features.css"
import FeaturesImg from "../img/features.png"

export default function Features(){
    return(
        <div className="about_banner">
            <section className="about" id = "features">
                
                <span className="about__info">

                    <p className="about__title" align="center">Features</p>

                    <br/>

                    <p className="about__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum culpa repudiandae molestiae. Ab magni exercitationem voluptate, voluptatem maiores aperiam. Vero ullam modi maiores similique praesentium nulla, nihil placeat a dolores voluptas vitae impedit veniam explicabo, debitis temporibus pariatur labore neque dolore corrupti ratione amet dignissimos. Natus laboriosam deleniti iste qui architecto dolorum accusantium dolore! Dicta laboriosam quas in libero pariatur!
                    </p>
                    
                    <br />
                    <p className="about__text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et soluta numquam exercitationem nam ad libero. Omnis delectus facilis dolores nulla.
                    </p>
                    <br/>
                    <a href="#" className="button">Learn more</a>

                </span>

                <span className="techs">
                    <span>
                        <img src={FeaturesImg} className="about__img"/>
                    </span>
                </span>

            </section>
        </div>
    )
}