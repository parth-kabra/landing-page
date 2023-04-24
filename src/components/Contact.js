import React from "react";
import contact from "../styles/contact.css"
import contact_img from "../img/contact.png"

export default function Contact(){
    return (
        <div className="about_banner">
            <section className="contact" id="contact">
                <p className="about__title">Contact us</p>
    
                <p className="home__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, labore!</p>
                <br/>
                <span className="contact__main">

                    <form className="form" onsubmit="return false">
                        
                        <span>
                            <p className="input__name">Name</p>
                            <input type="text" required name="name" id="name" className="name" placeholder="Enter your name" />
                        </span>

                        <br/>

                        <span>
                            <p className="input__name">Email</p>
                            <input type="email" required name="email" id="email" className="email" placeholder="Enter your email" />
                        </span>

                        <br/>

                        <span>
                            <p className="input__name">Message</p>
                            <textarea required name="msg" id="msg" className="msg" placeholder="Enter your message"></textarea>
                        </span>

                        <br/>
                        <a className="button" role="button" type="submit">Submit</a>
                        

                    </form>
                </span>
            <br/>
              
                <b className="love">Made with ❤️ by Parth Kabra</b>

            </section>

        </div>
    )
}