import * as actionConst from './ConstantStore';
import axios from 'axios'

 

export const responseHandler=(response) =>{
    console.log(response)
    return{
        type:actionConst.AUTHENTICATION_SUCESS,
        payload:response
    }
} 

export const saveTokenExpireTime=(time)=>{
    console.log("expire time",time)
    //localStorage.setItem("TokenExpireTime", time);
    return{
        type:actionConst.TOKEN_EXPIRETIME,
        time:time
    }
}

export const logout=()=>{
    return{
        type:actionConst.LOGOUT,
    }
}
export const userAuthentication =(email,password,signUpIn) =>{

    const request={
        email:email,
        password:password,
        returnSecureToken:true
    }
  
   
    return dispatch =>{
        if(signUpIn=="Switch To SignIn"){
            axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCaNbPV5d2-sE_5Wn1rGK-CkXsPNRnTvSE",request)
            .then(response=>{
                console.log("from authactioncreator",response);
                dispatch(responseHandler(response.data));
                dispatch(saveTokenExpireTime(response.data.expiresIn))
            }).catch(error =>{
                dispatch({type:actionConst.AUTHENTICATION_FAIL,error:error})
            })
        }else{
            axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCaNbPV5d2-sE_5Wn1rGK-CkXsPNRnTvSE",request)
            .then(response=>{
                console.log("from authactioncreator signin ",response);
                dispatch(responseHandler(response.data));
                dispatch(saveTokenExpireTime(response.data.expiresIn))
            }).catch(error =>{
                console.log(error);
                dispatch({type:actionConst.AUTHENTICATION_FAIL,error:error})
            })
        }
      
    }
}