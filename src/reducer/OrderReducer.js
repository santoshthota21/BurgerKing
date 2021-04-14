import * as ConstantStore from './ConstantStore';

const initialState={
    orders:[]
}

const  OrderReducer = (state=initialState,action)=>{

    if(action.type==ConstantStore.GET_ORDERS){
        console.log("Get Orders",action.payload)

        return{
            ...state,
            orders: [...action.payload]
        }
    }

    return{
        ...state
    }

} 
export default OrderReducer;