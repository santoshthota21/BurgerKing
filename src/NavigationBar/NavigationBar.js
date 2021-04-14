import React from 'react'
import ToolBar from './ToolBar/ToolBar'
import SideDrawer from './SideDrawer/SideDrawer'
import BackDrop from '../UI/BackDrop/BackDrop'

class NavigationBar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            openDrawer:false
        }
    }

    openDrawerHandler=()=>{
        this.setState({openDrawer:true});
        //alert("Open Drawer");
    }

    closeDrawerHandler=()=>{
        this.setState({openDrawer:false});
    }

    render(){

        return(
            <div>
                {this.state.openDrawer &&
                    <BackDrop>
                        <SideDrawer closeDrawer={this.closeDrawerHandler}></SideDrawer>
                    </BackDrop>
                }
            
                <ToolBar openDrawer={this.openDrawerHandler}></ToolBar>
            </div>
        );
    }

}

export default NavigationBar;