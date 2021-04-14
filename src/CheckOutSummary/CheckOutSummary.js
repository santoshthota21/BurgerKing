import React from 'react';
import Burger from '../Burger/Burger';
import './CheckOutSummary.css'
import UserDetails from './UserDetails/UserDetails'
import {connect} from 'react-redux'
import instance from '../axios/axios'
import  * as actionCreator from '../reducer/ActionCreator'
class CheckOutSummary extends React.Component{

    constructor(props){
        super(props);
        this.state={
            submitted:false
        }
    }  
    
    // componentDidMount(){

    //     let params=new URLSearchParams(this.props.location.search);
    //     let ingredent={}
    //     console.log(params.entries())
    //     for(let param of params.entries()){
    //         console.log(param);
    //         ingredent[param[0]]=+param[1];
    //     }
    //     console.log(ingredent);
    //     console.log("from checkoutsummary");
    //     console.log(this.props.ingredients);
    //     this.setState({ingredients:ingredent})

    // }

    goBack=()=>{
        this.props.history.goBack();
    }

    saveOrder=()=>{

        //localStorage.setItem('order',JSON.stringify(this.props.ingredients))
        
        //sending gata to server
        const order={
            ingredents:this.props.ingredients,
            price:this.props.totPrice,
            customer:{
                name:"santosh thota",
                address:"not required"

            }
        }
        
        // instance.post('/orders.json',order)
        // .then(response =>{this.setState({submitted:true})})
        // .catch(error =>console.log(error));

        console.log(this.props.token)
        this.props.saveOrder(order,this.props.token);
        //this.setState({submitted:this.props.saveDataStatus})
        
        
    }

    render(){
        //console.log(this.props.ingredients);
        let thankyou=(
            <div>
                <h1>Thank You</h1>
                <button className="COSBackBtn"  onClick={this.goBack}>&#8672; Go Back</button>
            </div>)

        return(
            <div className="COSContainer">
                {this.props.saveDataStatus&& thankyou}
                {!this.props.saveDataStatus && <div className="COS">
                    <div className="COSHeading">
                        <h1>Your Yummy Burger!!!</h1>
                    </div>
                    <div className="COSBurger">
                        <Burger ingredient={this.props.ingredients} ></Burger>
                    </div>
                    <div className="COSHeading">
                        <button className="COSBackBtn" onClick={this.goBack}> &#8672; cancel</button>
                        <button className="COSContinuebtn" onClick={this.saveOrder}>continue  &#8674;</button>
                    </div>
                </div>
                }
                {/* <div>
                    <UserDetails></UserDetails>
                </div> */}
            </div>
            
        );
    }
}

const mapStateToProps= state =>{
    return {
        ingredients : state.saveOrder.ingredients,
        totPrice : state.saveOrder.totalPrice,
        saveDataStatus: state.saveOrder.saveDataStatus,
        token:state.auth.idToken

      };
}

const mapDispatchToProps= dispatch =>{
    return{
        saveOrder : (order,token)=>dispatch(actionCreator.saveDataInServer(order,token))
        // saveOrder : (order)=>dispatch({type:"Dummy",payload:order})
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(CheckOutSummary);