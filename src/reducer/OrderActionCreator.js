import instance from '../axios/axios';
import * as ConstantStore from './ConstantStore';

export const setOrderToReducer = (orders) =>{
    return{
        type: ConstantStore.GET_ORDERS,
        payload:orders
    }

} 

export const getOrders = (token) =>{
    return dispatch =>{
        let obj=[]
        instance.get('/orders.json?auth='+token)
        .then(response =>{
            //console.log(response)
            if(response.status==200){
                console.log(response.data);

                Object.keys(response.data).map(key=>{
                    obj.push({...response.data[key]})
                })
                console.log(obj);
                dispatch(setOrderToReducer(obj))
                //this.setState({orders:obj})
            }
        })
        .catch(error =>{console.log(error)})
    }
}