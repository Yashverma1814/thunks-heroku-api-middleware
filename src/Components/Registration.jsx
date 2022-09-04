import { useState } from 'react'
import { registering } from '../Redux/action';
import {useDispatch,useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom'



export const Registration = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [username,setUsername] = useState('');
    const [mobile,setMobile] = useState('');
    const [description,setDescription] = useState('');
    const dispatch = useDispatch();
    const isRegistered = useSelector((state)=>state.isRegistered)


    if(isRegistered){
      return <Navigate to={'/login'} />
    }

  return (
    <div>
        <h1>Register</h1>
        <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
        <br />
        <input type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <input type="text" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <input type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
        <br />
        <input type="number" placeholder='Mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)} />
        <br />
        <input type="text" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)} />
        <br />
        <button onClick={()=>dispatch(registering({name,email,password,username,mobile,description}))}>Register</button>
        {isRegistered?<h1>Registered Successfully</h1>:''}
    </div>
  )
}
