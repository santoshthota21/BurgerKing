import React from 'react'
import './ToolBar.css'
import NavProperties from '../NavProperties/NavProperties'
import burgerLogo from '../../Asserts/Images/burgerLogo.png'

class ToolBar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            display: window.innerWidth>500? true: false
        }
      
    }

    resize = () => {
        console.log("inner width is:"+window.innerWidth);
        if(window.innerWidth <500){
            this.setState({display:false})
        }else{
            this.setState({display:true})
        }
       
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }
  
    render(){

        return(

           
            <div className="ToolBar">

           

                <div className="HambergLogo" onClick={this.props.openDrawer}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className="ToolBarLogo">
                    <div className="BLogo">
                        <img src={burgerLogo} width="50px" height="50px" alt="BLogo"></img>
                    </div>
                   
                    <h1 className="ToolBarHeading">Burger</h1>
                </div>

                {this.state.display && <NavProperties /> }
                
            </div>
        );
    }
}

export default ToolBar;