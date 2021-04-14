import React from 'react'
import {BrowserRouter,Route, Redirect} from 'react-router-dom';
import Orders from '../Orders/Orders';
import App from '../App'
import NavigationBar from '../NavigationBar/NavigationBar'
import CheckOutSummary from '../CheckOutSummary/CheckOutSummary'
import Login from '../Login/Login'
import SignUpIn from '../SignUpIn/SignUpIn';
import {connect} from 'react-redux';
import logout from '../SignUpIn/Logout';

class Layout extends React.Component{

    render(){
        return(

           
            <BrowserRouter>
                <NavigationBar ></NavigationBar>
                <Route path="/home" exact component={App}></Route>
                <Route path="/orders" exact component={Orders}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/signUpIn" exact component={SignUpIn}></Route>
                <Route path="/logout" exact component={logout}></Route>
                <Route path="/checkOutSummary/:order" exact component={CheckOutSummary}></Route>
                <Redirect to="/home"></Redirect>
            </BrowserRouter>
        );
    }
}

export default (Layout);