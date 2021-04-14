import React from 'react';
import './BurgerControllers.css'
import Button from '../UI/Button/Button'
import Modal from '../UI/Modal/Modal'
import BackDrop from '../UI/BackDrop/BackDrop'
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux';

class BurgerControllers extends React.Component{

    constructor(props){
        super(props);
        this.state={
            items:['Meat','Cheese','Salad','Bacon'],
            showModal:false

        }
       // this.openOrdersandler=this.openOrdersandler.bind(this);
    }

    removeItem(item){
        console.log("removed: "+item);
        this.props.remove(item);
    }

    addItem(item){
        console.log("added: "+item);
        this.props.add(item);
    }

    openOrdersHandler=()=>{
        //return <Modal>Total cost is:Rs <strong>{this.props.totalCost}</strong></Modal>
        if(this.props.isAuthenticated){
             this.setState({showModal:true});
        }else{
            {/* <Redirect to="/signUpIn"></Redirect> */}
            this.props.history.push("/signUpIn");
        }
    }

    closeOrdersHandler=()=>{
        //return <Modal>Total cost is:Rs <strong>{this.props.totalCost}</strong></Modal>
        this.setState({showModal:false});
        console.log(this.props.history);
        //console.log(this.props.history.push());
        let queryParam=[];

        let ingredients=Object.keys(this.props.ingredient).map(  item=>{
            console.log(item)
            console.log(this.props.ingredient[item])
            return encodeURIComponent(item)+"="+encodeURIComponent(this.props.ingredient[item]);
        });
        queryParam=ingredients.join("&");

        //console.log(ingredients);
        //console.log(queryParam);
        
        this.props.history.push({
            pathname:'/checkOutSummary/order=',
            search:'?'+queryParam
        });
    }

    render(){
        var status=this.props.totalCost>0?true:false;
        return(
            <div className="TotalCost">
            <p>Total cost is: Rs <strong>{this.props.totalCost}</strong></p>
            
            {this.state.items.map(item=>{
                
               return (<div className="ControllerRow" key={item}>
                   
                    <div className="itemName"> <h6>{item}</h6></div>
                    <button className="LessBtn" onClick={()=>{this.removeItem(item)}}>Less</button>
                    <button className="MoreBtn" onClick={()=>{this.addItem(item)}}>More</button>
                </div>)
                
                })}
            <button className="OrderButton" disabled={!status} onClick={()=>{this.openOrdersHandler()}}>{this.props.isAuthenticated?"Order":"Login To Order"}</button>
           
            {this.state.showModal && (<div><BackDrop /> <Modal ingredient={this.props.ingredient} close={this.closeOrdersHandler} totalCost={this.props.totalCost}></Modal></div> )}
            </div>
        );
    }
}

const mapStateToProps =state =>{
    return{
        isAuthenticated:state.auth.isAuthenticated
    }
}



export default connect(mapStateToProps,null)(BurgerControllers);
