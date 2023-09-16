import React, { useState } from 'react';
import style from "./Portfolio.module.css";
import woodHouse from '../imgs/poert1.png'
import cake from '../imgs/port2.png'
import cercus from '../imgs/port3.png'
export default function Portfolio() {


    const [Clicked, setClicked] = useState(false);
    const [image, setImage] = useState("");
    // const [temp, setTemp] = useState(false);




    const open = (i) => {
        setImage(i);
        setClicked(true);
    }

    const hide = (e) => {
        if (e == undefined) {
            setClicked(false);
            setImage("");
        }
    }

    // const extraCheck = (e) => {
    //     if (e.target === 'img') {
    //         setTemp(true);
    //     } else {
    //         setTemp(false);
    //     }
    // }


    return <>
        <section className=' vh-100'>
            <div className='d-flex flex-column justify-content-center align-items-center mt-1'>
                <h2 className={` ${style.heading} `}>PORTFOLIO COMPONENT</h2>
                <div className="line d-flex justify-content-center align-items-center mt-2">
                    <div className={`${style.part}`}></div>
                    <i className={`fa-solid fa-star ${style.starColor} ${style.marginLeftRight}`}></i>
                    <div className={`${style.part}`}></div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row gx-5">
                    <div className="col-md-4 mb-5">
                        <div onClick={() => {
                            open(woodHouse);
                        }} className={`${style.item} ${style.borderRadius} position-relative`}>
                            <img src={woodHouse} className={`w-100 ${style.borderRadius}`} alt="wood house" />
                            <div className={`${style.itemLayer} position-absolute d-flex justify-content-center align-items-center`}>
                                <i className={`${style.plusFontSize} fa-solid fa-plus text-white `}></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div onClick={() => {
                            open(cake);
                        }} className={`${style.item} ${style.borderRadius} position-relative`}>
                            <img src={cake} className={`w-100 ${style.borderRadius}`} alt="cake" />
                            <div className={`${style.itemLayer} position-absolute d-flex justify-content-center align-items-center`}>
                                <i className={`${style.plusFontSize} fa-solid fa-plus text-white `}></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div onClick={() => {
                            open(cercus);
                        }} className={`${style.item} ${style.borderRadius}  position-relative`}>
                            <img src={cercus} className={`w-100 ${style.borderRadius}`} alt="cercus" />
                            <div className={`${style.itemLayer} position-absolute d-flex justify-content-center align-items-center`}>
                                <i className={`${style.plusFontSize} fa-solid fa-plus text-white `}></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div onClick={() => {
                            open(woodHouse);
                        }} className={`${style.item} ${style.borderRadius}  position-relative`}>
                            <img src={woodHouse} className={`w-100 ${style.borderRadius}`} alt="wood house" />
                            <div className={`${style.itemLayer} position-absolute d-flex justify-content-center align-items-center`}>
                                <i className={`${style.plusFontSize} fa-solid fa-plus text-white `}></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div onClick={() => {
                            open(cake);
                        }} className={`${style.item} ${style.borderRadius} position-relative`}>
                            <img src={cake} className={`w-100 ${style.borderRadius}`} alt="cake" />
                            <div className={`${style.itemLayer} position-absolute d-flex justify-content-center align-items-center`}>
                                <i className={`${style.plusFontSize} fa-solid fa-plus text-white `}></i>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => {
                        open(cercus);
                    }} className="col-md-4">
                        <div className={`${style.item} ${style.borderRadius} position-relative`}>
                            <img src={cercus} className={`w-100 ${style.borderRadius}`} alt="cercus" />
                            <div className={`${style.itemLayer} position-absolute d-flex justify-content-center align-items-center`}>
                                <i className={`${style.plusFontSize} fa-solid fa-plus text-white `}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={(e) => {
                if (e.target.src ==undefined ) {
                    hide(e.target.src);
                } 
            }} _ngcontent-cpj-c19='' className={`model__ position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center ${!Clicked ? 'd-none' : ''}   ${style.zIndex}`}>
                <img _ngcontent-cpj-c19='' alt='image' src={image != null ? image : ''} width={600} />
            </div>
        </section>
    </>
}
