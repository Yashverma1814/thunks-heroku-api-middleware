import { logingIn } from '../Redux/action'
import { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'

export const Login = () => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch();
    const token = useSelector((state)=>state.token)
    const isRegistered = useSelector((state)=>state.isRegistered)


    if(!isRegistered){
      return <Navigate to={'/register'} />
    }
    
    if(token==='8a72dabc7749ba146a07ba14d5be2b7c'){
      return <Navigate to={'/dashboard'} />
    }


  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
        <br />
        <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <button onClick={()=>dispatch(logingIn({username,password}))}>Log In</button>
        {token===''?'':<h1>Login Successfully</h1>}
    </div>
  )
}
