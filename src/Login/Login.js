import React from 'react'
import './Login.css'
import UserDetails from '../CheckOutSummary/UserDetails/UserDetails'
class Login extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="UserDetailsForm">
                <UserDetails></UserDetails>
            </div>
        );
    }

}

export default Login;