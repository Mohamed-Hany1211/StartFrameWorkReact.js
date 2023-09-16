import React from 'react'
import style from "./About.module.css"
export default function About() {
    return <>
        <section className={`${style.about} d-flex flex-column justify-content-center align-items-center`}>
            <div className="container d-flex flex-column justify-content-center align-items-center pt-5">
                <h2 className={`text-white ${style.heading} `}>ABOUT COMPONENT</h2>
                <div className="line d-flex justify-content-center align-items-center mt-2">
                    <div className={`${style.part}`}></div>
                    <i className={`fa-solid fa-star text-white ${style.marginLeftRight}`}></i>
                    <div className={`${style.part}`}></div>
                </div>
                <div className={`row mt-3 ${style.rwWidth}`}>
                    <div className="col-md-6">
                        <div className="item">
                            <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="item">
                            <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
