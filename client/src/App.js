import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Signin from './Signin'
import Login from './Login'
import Welcome from './Welcome'
function App() {
  return (
    <div>
      <Router>
        <Routes>
           <Route path='/' element={<Login/>}></Route>
           <Route path='/signin' element={<Signin/>}></Route>
           <Route path='/welcome' element={<Welcome/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

