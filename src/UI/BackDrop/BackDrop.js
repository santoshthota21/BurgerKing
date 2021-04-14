import React from 'react'
import './BackDrop.css'
let backDrop=(props)=>{

    return(
        <div className="BackDrop" >
           {props.children}
        </div>

    );
    
}

export default backDrop;