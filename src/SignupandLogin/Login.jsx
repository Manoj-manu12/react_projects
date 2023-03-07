import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import STYLE from './login.module.css'


const Login = () => {
  let navigate = useNavigate()


  let [email , setEmail] = useState("")
  let [password ,setPassword]=useState("")
   
  
  let handleData=(e)=>{
    e.preventDefault()

    let localEmail=localStorage.getItem("email")
    let localPassword=localStorage.getItem("password")
    if(localEmail === email && localPassword === password){

     alert('logged in successfully')
      navigate('/home')
    }
    else{
      alert("invalid email/password")
      navigate('/login')
    }
  }
  return (
    <div className={STYLE.mainDiv}>
    <div>
      <h1 className={STYLE.h1Block}>Login</h1>
       <form action="">
       <label htmlFor="email" style={{backgroundColor:'green'}} >Email:</label>
      <br />
      <input type="text"  name="username" id="username"  onChange={(e)=>{
        setEmail(e.target.value)
      }}/>
      <br />
      <label htmlFor="password" style={{backgroundColor:'green'}}>Password:</label>
      <br />
      <input type="password"  name="password" id="password" onChange={(e)=>{
        setPassword(e.target.value)
      }}/>
      <br />
      <button onClick={handleData} style={{backgroundColor:"red"}}>Submit</button>
       </form>
       <a href="./" style={{backgroundColor:"green"}}>Don't have an account? signUp</a>
      
    </div>
    </div>
  )
  }

export default Login