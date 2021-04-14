import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import * as actionCreator from '../reducer/AuthActionCreator'

class Logout extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.logout();
    }
    render(){
        return(
            <div>
                <Redirect to="/home"></Redirect>
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return{

    }
}

const mapDispatchToProps = dispatch =>{
    return{
        logout: ()=>dispatch(actionCreator.logout())
    }
}
export default connect(null,mapDispatchToProps)(Logout);