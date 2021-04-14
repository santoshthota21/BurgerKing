
import Reducer from './reducer';
import instance from '../axios/axios';

export const sendSaveResponseToReducer=(status)=>{
    return{
        type:"Dummy",
        payload:status
    };
}

export const saveDataInServer=(order,token)=>{
    console.log("Action creator",order)
    return dispatch =>{
        
        instance.post('/orders.json?auth='+token,order)
        .then(response =>{
            // this.setState({submitted:true})
            dispatch(sendSaveResponseToReducer(true))
        })
        .catch(error =>console.log(error));

    }
} 