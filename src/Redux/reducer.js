import {LOGIN, REGISTER } from "./actionTypes";

const initState = {
    token : '',
    isRegistered:false,    
}

export const reducer = (state=initState,action) =>{
    switch(action.type){
        case LOGIN:{
            console.log(action.payload)
            return {
                ...state,
                token:action.payload
            }
        }
        case REGISTER:{
            console.log(action.payload);
            let temp;
            if(!action.payload){
                temp=true;
            }
            else{
                temp=false;
            }
            return {
                ...state,
                isRegistered:temp
            }
        }
        default:
            return state
    }
}