import React from 'react'
import './Button.css'

let button =(props)=>{
    return(
        <button className={props.class}>{props.children}</button>
    );
}

export default button;