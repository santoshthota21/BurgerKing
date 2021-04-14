import React from 'react'
import './NavProperties.css'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

class NavProperties extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render(){
        
        return(
            <div className="NavProperties">
                <div className="NavLinks">
                    <ul> <NavLink to="/home">Home</NavLink></ul>
                   {this.props.isAuth && <ul> <NavLink to="/orders">Orders</NavLink></ul> }
                    <ul> <NavLink to="/login">Login</NavLink></ul>
                    {!this.props.isAuth && <ul> <NavLink to="signUpIn">signUpIn</NavLink></ul>}
                    {this.props.isAuth && <ul> <NavLink to="logout">logout</NavLink></ul>}
                    
                </div>
            </div>  
        );
    }
}


const mapStateToProps = state =>{
    return{
        isAuth:state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps,null)(NavProperties);