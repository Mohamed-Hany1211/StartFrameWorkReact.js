import React, { useState } from 'react'
import style from "./Contact.module.css"
export default function Contact() {


    const [typeing,setTyping] = useState(false);
    const [typein2,setTyping2] = useState(false);
    const [typein3,setTyping3] = useState(false);
    const [typeing4,setTyping4] = useState(false);
    
    const getData = (val)=>{
        if(val.target.value!=''){
            setTyping(true)
        }else{
            setTyping(false);
        }
    }
    const getData2 = (val)=>{
        if(val.target.value!=''){
            setTyping2(true)
        }else{
            setTyping2(false);
        }
    }
    const getData3 = (val)=>{
        if(val.target.value!=''){
            setTyping3(true)
        }else{
            setTyping3(false);
        }
    }
    const getData4 = (val)=>{
        if(val.target.value!=''){
            setTyping4(true)
        }else{
            setTyping4(false);
        }
    }


    return <>
        <section className={` vh-100 d-flex flex-column  align-items-center`}>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h2 className={`${style.heading} `}>CONATCT SECTION</h2>
                <div className="line d-flex justify-content-center align-items-center mt-2">
                    <div className={`${style.part}`}></div>
                    <i className={`fa-solid fa-star ${style.starColor} ${style.marginLeftRight}`}></i>
                    <div className={`${style.part}`}></div>
                </div>
            </div>
            <div className={`${style.containe}`}>
                <div className={`d-flex flex-column`}>

                    <div className={` ${style.dHeight}  position-relative ${style.inputMargin}`}>
                    <label className={`${typeing ? style.label:style.Active} position-absolute`} htmlFor="#">userName :</label>

                    <input  onChange={getData}  type="text" name="" id="" className={`  w-100 ${style.inputBorRadius}  `} placeholder='userName' />
                    </div>

                    <div className={` ${style.dHeight}  position-relative ${style.inputMargin}`}>
                    <label className={`${typein2 ? style.label:style.Active} position-absolute`} htmlFor="#">userAge :</label>
                    <input onChange={getData2} type="text" name="" id="" className={` ${style.inputBorRadius} ${style.inputMargin} w-100`} placeholder='userAge' />
                    </div>

                    <div className={` ${style.dHeight}  position-relative ${style.inputMargin}`}>
                    <label className={`${typein3 ? style.label:style.Active} position-absolute`} htmlFor="#">userEmail :</label>
                    <input onChange={getData3} type="text" name="" id="" className={` ${style.inputBorRadius} ${style.inputMargin} w-100`} placeholder='userEmail' />
                    </div>

                    <div className={` ${style.dHeight}  position-relative ${style.inputMargin}`}>
                    <label className={`${typeing4 ? style.label:style.Active} position-absolute`} htmlFor="#">userPassword :</label>
                    <input onChange={getData4} type="text" name="" id="" className={` ${style.inputBorRadius} w-100`} placeholder='userPassword' />
                    </div>
                </div>
                <button type="submit" className={`${style.btnLayout} mt-4  text-white`}>Send Message</button>
            </div>
        </section>
    </>
}
