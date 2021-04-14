import React from 'react'
import './SideDrawer.css'
import burgerLogo from '../../Asserts/Images/burgerLogo.png'
import NavProp from '../NavProperties/NavProperties'

class SideDrawer extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="SideDrawer">
                <div className="SCloseBtn">
                    <button  id="SCloseBtnId" onClick={this.props.closeDrawer}> &times;</button>
                </div>
               
               <div className="SBurgerLogo">
                    <img src={burgerLogo} width="100px" height="100px" alt="BLogo"></img>
               </div>

               <NavProp />
               
                <h1>
                    hi sideDrawer
                </h1>
            </div>
            
        );
    }
}

export default SideDrawer;