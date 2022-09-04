import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Dashboard } from './Dashboard'
import { Login } from './Login'
import { Registration } from './Registration'

export const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registration />}/>
        </Routes>
    </div>
  )
}
