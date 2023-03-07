import React from 'react'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';



const App13 = () => {
  return (
    <>
    <Router>
       <Routes>

           <Route  path='/' element={<SignUp/>}/>
           <Route  path='/login' element={<Login/>}/>
           <Route  path='/home' element={<Home/>}/>
  
      </Routes>
  </Router>
    
    </>
  )
}

export default App13