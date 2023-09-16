import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from "./Navbar.module.css"
export default function Navbar() {

    // change the height of the navbar

    const [height, setHeight] = useState(true);

    const changeHeight = () => {
        if (window.scrollY >= 4) {
            setHeight(false);
        } else {
            setHeight(true)
        }
    }
    window.addEventListener('scroll', changeHeight);




    return (
        <>

            <nav className={`navbar fixed-top navbar-expand-lg ${height ? style.NavbarP : style.Active}`}>
                <div className="container">
                    <a className={`navbar-brand text-white ${style.Bran}`}>START FRAMEWORK</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className={`nav-item ${style.line} ${style.linkCover}`}>
                                <NavLink className={`nav-link active  text-white`} to="about" style={({isActive})=>{
                                    return{
                                        backgroundColor: isActive ? '#1abc9c' : "",
                                        borderRadius : isActive ? '0.5rem' : '0rem'
                                    };
                                }}>ABOUT</NavLink>
                            </li>
                            <li className={`nav-item ${style.line}`}>
                                <NavLink className={`nav-link active text-white`} to="portfolio" style={({isActive})=>{
                                    return{
                                        backgroundColor: isActive ? '#1abc9c' : "",
                                        borderRadius : isActive ? '0.5rem' : '0rem'
                                    };
                                }}>PORTFOLIO</NavLink>
                            </li>
                            <li className={`nav-item ${style.line}`}>
                                <NavLink className={`nav-link active text-white`} to="contact" style={({isActive})=>{
                                    return{
                                        backgroundColor: isActive ? '#1abc9c' : "",
                                        borderRadius : isActive ? '0.5rem' : '0rem'
                                    };
                                }}>CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </>
    )
}
