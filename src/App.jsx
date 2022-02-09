import React from 'react'
import Error from "./Component/Error"
import {Routes as Switcher,Route} from "react-router-dom"
import Login from './Component/Login'
import SignUp from './Component/SignUp'

function App() {
  return (
    <div>
        <Switcher>
          <Route path='/'  element={<SignUp/>} />
          <Route path='/login'  element={<Login/>} />

<Route path='*' element={<Error/>}  />

        </Switcher>
    </div>
  )
}

export default App