import React from 'react';
import style from "./Home.module.css";
import mainImage from "../imgs/avataaars.svg";
export default function Home() {
    return <>
    <section className={`${style.home} d-flex justify-content-center align-items-center`}>
        <div className="main mt-5">
            <img className={`${style.imgMargin} mt-5 ${style.imgMarginLright}`} src={mainImage} alt="Main avatar" width={250}/>
            <h2 className={`text-white ${style.heading}`}>START FRAMEWORK</h2>
            <div className="line d-flex justify-content-center align-items-center mt-3">
                <div className={`${style.part}`}></div>
                <i className={`fa-solid fa-star text-white ${style.marginLeftRight}`}></i>
                <div className={`${style.part}`}></div>
            </div>
            <div className='text-white text-center mt-3'>Graphic Artist - Web Designer - Illustrator</div>
        </div>
    </section>
    </>
}
