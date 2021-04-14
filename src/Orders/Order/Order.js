import React from 'react'
import './Order.css';
const order=(props)=>{

    const data=Object.keys(props.ing).map(val=>{

        return(<h3> {val} {props.ing[val]} </h3>);
    })
    return(
        <div className="Order">
            <h1>{props.customer.name}</h1>
            <div>
                
                {data}
            </div>
        </div>
    );
}

export default order;