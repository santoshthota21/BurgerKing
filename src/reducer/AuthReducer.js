import * as actionConst from './ConstantStore'

const initialState={
    idToken: null,
    email: null,
    kind:null,
    refreshToken: null,
    expiresIn: null,
    localId: null,
    error:null,
    isAuthenticated:false
}

const AuthReducer = (state=initialState,action)=>{

    if(action.type==actionConst.AUTHENTICATION_SUCESS){
        console.log("AuthReducer",action.payload)
        
        return{
            ...state,
            ...action.payload,
            isAuthenticated:true,
            error:null
        }
    }

    if(action.type==actionConst.AUTHENTICATION_FAIL){
        return{
            ...state,
            isAuthenticated:false,
            error:action.error
        }
    }

    if(action.type == actionConst.TOKEN_EXPIRETIME){
        console.log("expire time AuthReducer ",action.time)
        localStorage.setItem("TokenExpireTime", action.time);
        return{
            ...state
        }
    }

    if(action.type == actionConst.LOGOUT){
        console.log("Logout")
        return{
            ...state,
            idToken: null,
            email: null,
            kind:null,
            refreshToken: null,
            expiresIn: null,
            localId: null,
            error:null,
            isAuthenticated:false
        }
    }
    console.log("outside if in Authreducer",action);

    return{
        ...state
    }
}

export default AuthReducer;