import React from 'react';
import logo from './logo.svg';
import './App.css';
import Burger from './Burger/Burger'
import BurgerControllers from './BurgerControllers/BurgerControllers'
import ToolBar from './NavigationBar/ToolBar/ToolBar';
import NavigationBar from './NavigationBar/NavigationBar';
import {connect} from 'react-redux';


// const Cost_of_each_items={
//   Cheese:2,
//   Meat:4,
//   Salad:1,
//   Bacon:0.5,
// }
class  App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      ingredient:{
        
        Cheese:0,
        Meat:0,
        Salad:0,
        Bacon:0,
       
      },
      total_cost:0   
    }

    // this.addItem =this.addItem.bind(this);
    // this.removeItem =this.removeItem.bind(this);
    // this.costEstimateHandler =this.costEstimateHandler.bind(this);
  }


  // addItem(item){
  //   console.log("Item added in Appjs"+item);
  //   let oldCount=this.state.ingredient[item];
  //   let newCount=oldCount+1;
  //   let upgradeIngredients={...this.state.ingredient};
  //   upgradeIngredients[item]=newCount;
  //   this.costEstimateHandler(item,"add");
  //   this.props.addIngredientHandler(item)
  //   this.setState({ingredient:upgradeIngredients});
  // }

  // removeItem(item){
  //   console.log("Item removed in Appjs"+item);
  //   let oldCount=this.state.ingredient[item];
  //   let newCount=oldCount-1;
  //   if(newCount>=0){
  //     let upgradeIngredients={...this.state.ingredient};
  //     upgradeIngredients[item]=newCount;
  //     this.props.removeIngredientHandler(item);
  //     this.setState({ingredient:upgradeIngredients});
  //     this.costEstimateHandler(item,"sub");
  //   }else{
  //     alert("Item is not added to remove!!!")
  //   }
  
  // }

  // costEstimateHandler(item,action){
  //   let cost_to_be_added=0;
    
  //   let added_cost=Object.keys(Cost_of_each_items).map(IKey=>{
  //     if(item==IKey){
       
  //       cost_to_be_added=Cost_of_each_items[IKey];
  //       return Cost_of_each_items[IKey];
  //     }else  if(item==IKey){
       
  //       cost_to_be_added=Cost_of_each_items[IKey];
  //       return Cost_of_each_items[IKey];
  //     }
  //   })

  //   let old_cost=this.props.totPrice;
  //   let new_cost=0;

  //   if(action=="add"){
      
  //     new_cost=old_cost+cost_to_be_added;
    
  //   }else  if(action=="sub"){
      
  //     new_cost=Number(old_cost)-Number(cost_to_be_added);
      
  //   }
   
  //   if(new_cost<0){
  //     new_cost=0;
  //   }
  //   this.props.totalCostHandler(new_cost);
  //   //this.setState({total_cost:new_cost});
  // }
  
  render(){

    return (
      <div className="App">
          <Burger ingredient={this.props.ingredients} ></Burger>

          <BurgerControllers 
              ingredient={this.props.ingredients}  
              totalCost={this.props.totPrice} 
              add={this.props.addIngredientHandler} 
              remove={this.props.removeIngredientHandler} 
              {...this.props}>
          </BurgerControllers>        
      </div>
    );

  }
 
}


const mapPropsToState=state=>{

  return {
    ingredients : state.saveOrder.ingredients,
    totPrice : state.saveOrder.totalPrice
  };

}

const mapDispatchToProps= dispatch =>{

  return{
    totalCostHandler: (totalcost)=>dispatch({type:"TOTAL_COST",payload:totalcost}),
    addIngredientHandler:(item)=>dispatch({type:"ADD_INGREDIENT",item:item}),
    removeIngredientHandler:(item)=>dispatch({type:"REMOVE_INGREDIENT",item:item})
  };
}

export default connect(mapPropsToState,mapDispatchToProps)(App);
