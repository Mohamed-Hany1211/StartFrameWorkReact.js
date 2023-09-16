import React from 'react'
import style from "./Notfound.module.css"
export default function Notfound() {
    return <>
    <div className='pt-5'>
    <div className={`${style.marginTop} vh-100 text-center`}>
        <h1>File not found!</h1>
    </div>
    </div>
    </>
}
