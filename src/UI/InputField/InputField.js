import React from 'react';
import './InputField.css';

const inputField=(props)=>{

    //console.log(props);
    var errorClassName="";
    if(props.touched && !props.valid){
        console.log(props.id);
        errorClassName="Error";

    }
    return(
       
            <input
                className={"InputField "+errorClassName}
                id={props.id}
                type={props.elementType} 
                placeholder={props.placeholder}
                onChange={props.changed} 
                value={props.value}>
            </input>
       
    );
}

export default inputField;