import * as constantVar from './ConstantStore'

const initialState={
    ingredients:{
        Cheese:0,
        Meat:0,
        Salad:0,
        Bacon:0
    },
    totalPrice:0,
    ingredientsAdded:false,
    saveDataStatus:false
};

const Cost_of_each_items={
    Cheese:2,
    Meat:4,
    Salad:1,
    Bacon:0.5,
  }

const reducer=(state=initialState,action)=>{

    if(action.type==constantVar.ADD_INGREDIENT){
        let ingredient=JSON.parse(JSON.stringify(state));
        Object.keys(ingredient.ingredients).map(val=>{
             if(val==action.item){
                    ingredient.ingredients[val]=ingredient.ingredients[val]+1;
                    ingredient.totalPrice=ingredient.totalPrice+Cost_of_each_items[val]
             }
        });
        console.log(ingredient)
        return{
            ...ingredient,
            ingredientsAdded:true
        };
    }

    if(action.type==constantVar.REMOVE_INGREDIENT){
        // let ingredient=JSON.parse(JSON.stringify(state));
        // Object.keys(ingredient.ingredients).map(val=>{
        //      if(val==action.item && ingredient.ingredients[val]>0){
        //             ingredient.ingredients[val]=ingredient.ingredients[val]-1;
        //             ingredient.totalPrice=ingredient.totalPrice-Cost_of_each_items[val]
        //      }
        // });
        // console.log(ingredient)
        if(state.ingredients[action.item]-1>=0){
            return{
                //...ingredient
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.item]:state.ingredients[action.item]-1
                },
                totalPrice:state.totalPrice-Cost_of_each_items[action.item],
                ingredientsAdded:true

            };
        }else{
            return{
                ...state
            }
        }
    }


   
    if(action.type==constantVar.TOTAL_COST){
        let ingredient=JSON.parse(JSON.stringify(state));
        console.log(ingredient,"total cost reducer");
        
        ingredient.totalPrice=action.payload;
        return{
            ...ingredient
        }
    }

    if(action.type==="Dummy"){
        console.log("returning state from reducer dummy",action.payload);
        return{
            ...state,
            saveDataStatus:action.payload
        
        }
    }
    console.log("outside if in reducer",action);

    return {...state};

}

export default reducer;