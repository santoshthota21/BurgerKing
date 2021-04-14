import React from 'react';
import inputField from '../UI/InputField/InputField';
import {connect} from 'react-redux';
import * as authActionCreator from '../reducer/AuthActionCreator'
import {Redirect} from 'react-router-dom'
import './SignUpIn.css'
class SignUpIn extends React.Component{

    constructor(props){
        super(props);

        this.state={
            formFields:{
                Email:{
                    type:"Email",
                    value:"",
                    placeholder:"Email",
                    validation:{
                        isRequired:true
                    },
                    valid:false,
                    isTouched:true
                },
                password:{
                    type:"password",
                    value:"",
                    placeholder:"Password",
                    validation:{
                        isRequired:true
                    },
                    valid:false,
                    isTouched:false
                }

            },
            toggleSignUpIn:"Switch To SignIn"
        }

    }

    onChangeHandler=(event,field)=>{
        //console.log(event.target.value,field)
       
        let updatedFormField = {
            ...this.state.formFields,
            [field]:{
                ...this.state.formFields[field],
                value: event.target.value
            }
        }
        this.setState({formFields:updatedFormField})
      
    }

    toggleSignUpIn=()=>{
        this.setState({toggleSignUpIn:this.state.toggleSignUpIn=="Switch To SignIn"?"Switch To SignUp":"Switch To SignIn"})
    }

    submitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state.formFields.Email.value);
        console.log(this.state.formFields.password.value);
        this.props.sendCredentials(this.state.formFields.Email.value,this.state.formFields.password.value,this.state.toggleSignUpIn);
    }

    render(){
        // console.log("expire time",this.props.expiresIn)
        const formFields=[];
        for(let field in this.state.formFields){
            formFields.push(this.state.formFields[field]);
        }
      
        const formData= formFields.map(field=>{
            
            return  <input className="FormField" placeholder={field.placeholder} Type={field.type} value={field.value} onChange={(event)=>this.onChangeHandler(event,field.type)}/> 
            
        })
        let time=this.props.expiresIn;
        let data=null
        if(this.props.error){
            data=(
                <h1>Error </h1>
            );
        }else{
            data=null;
        }
        let reDirectToHome=null;
        console.log(this.props.isAuthenticated)
        if(this.props.isAuthenticated){
            reDirectToHome=<Redirect to="/home"></Redirect>
        }
        return(
            <div className="SignUpIn">
                {reDirectToHome}
                {formData}
                <button className="SignUpInBtn" onClick={this.submitHandler} >Submit</button>
                <button className="ToggleSignUpIn" onClick={this.toggleSignUpIn}>{this.state.toggleSignUpIn}</button>
                {data}
                {time}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        token:state.auth.idToken,
        localId:state.auth.localId,
        error:state.auth.error,
        expiresIn:state.auth.expiresIn,
        ingredientsAdded:state.saveOrder.ingredientsAdded,
        isAuthenticated:state.auth.isAuthenticated
    }
}

const mapDispatchToProps = dispatch =>{
  
    return {
        //sendCredentials : (email,password)=>dispatch({type:"AUTHENTICATION_SUCESS",payload:data})
        sendCredentials : (email,password,signUpIn)=>dispatch(authActionCreator.userAuthentication(email,password,signUpIn))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpIn);