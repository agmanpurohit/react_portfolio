import React from 'react'
import logo from '../../assets/logo.png'
import './navbar.scss'

const Navbar = () => {

    return (
        <>
            <header>
                <a href="#" className="logo"><img src={logo} /></a>

                <ul className="navlist">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#blogs">Blogs</a></li>
                </ul>
                <div className="btn-icon">
                    <a href="#contact" className="btn">Contact Us</a>
                    <div className="bx bx-menu" id="menu-icon"></div>
                </div>
            </header>
        </>
    )
}

export default Navbar