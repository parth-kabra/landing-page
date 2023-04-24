import React from "react";
import header from "../styles/header.css"

export default function Header(){
    function openNav() {
        document.getElementById("mySidebar").style.width = "70vw"; 
    }
    
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
    }
    return(
        <>
        <div id="mySidebar" className="sidebar" >
            <a href="javascript:void(0)" onClick={closeNav} className="closebtn">×</a>
            <span class="options">
                <a href="#home" class="nav__text" onClick = {closeNav}>
                    <span class="nav__link">Home</span>
                </a>
                <a href="#features" class="nav__text" onClick = {closeNav}>
                    <span class="nav__link">Features</span>
                </a>
                <a href="#screenshots" class="nav__text" onClick = {closeNav}>
                    <span class="nav__link">Screenshots</span>
                </a>
                <a href="#download" class="nav__text" onClick = {closeNav}>
                    <span class="nav__link">Download</span>
                </a>
                <a href="#contact" class="nav__text" onClick={closeNav}>
                    <span class="nav__link">Contact</span>
                </a>
            </span>
        </div>
        <section alt="home page" className="header">
            
            <b className="logo">LOGO</b>

            <span className="header__options">
                <a href="#home" alt="home">Home</a>
                <a href="#features" alt="features">Features</a>
                <a href="#screenshots" alt="screenshots">Screenshots</a>
                <a href="#download" alt="download">Download</a>
                <a href="#contact" alt="contact">Contact</a>
            </span>
            <span className="header__menu">
                <i class='bx bx-menu' onClick={openNav}></i>
            </span>

        </section>
        </>
    )
}