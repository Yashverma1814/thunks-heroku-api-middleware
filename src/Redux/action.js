import { LOGIN, REGISTER } from "./actionTypes";

export const register = (data) => {
    return {
        type: REGISTER,
        payload:data
    }
}
export const login = (data) => {
    return {
        type: LOGIN,
        payload:data
    }
}

export const registering = (data) => (dispatch) => {
    const dataToPost = JSON.stringify(data);
    fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
        method:'POST',
        body:dataToPost,
        headers: {
            "Content-Type":"application/json"
        }
    }).then((res)=>res.json())
    .then((res)=>dispatch(register(res.error)));
}
export const logingIn = (data) => (dispatch) => {
    const dataToPost = JSON.stringify(data);
    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
        method:'POST',
        body:dataToPost,
        headers: {
            "Content-Type":"application/json"
        }
    }).then((res)=>res.json())
    .then((res)=>dispatch(login(res.token)));
}