import React from 'react';
import './Modal.css'

let modal=(props)=>{
    return(
        <div className="Modal">
            <h6>Ordered Summary</h6>
           
            <table className="OrderedSummary">
                <tbody>
                    
                    <tr>
                        <td><b>Item</b></td>
                        <td><b>Quantity</b></td>
                    </tr>     
           
                    {Object.keys(props.ingredient).map(IKey=>{
                        return (                    
                            <tr key={IKey}>
                                <td>{IKey}</td>
                                <td>{props.ingredient[IKey]}</td>
                            </tr>
                    )})
                    }

                    <tr>
                        <td>______________</td>
                        <td>______________</td>
                    </tr>
                    <tr>
                        <td><b>Total cost:</b></td>
                        <td><b>Rs{props.totalCost}</b></td>
                    </tr>

                </tbody>
            </table>
            
            <button className="CloseBtn" onClick={props.close}>CLOSE</button>
            <button className="ContBtn" onClick={props.close}>Continue</button>
            
        </div>
    );
    
}

export default modal;

