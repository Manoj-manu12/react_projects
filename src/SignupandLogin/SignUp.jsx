import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import STYLE from './signup.module.css'




const SignUp = () => {

  let navigate = useNavigate()

const [inpVal,setInpVal]= useState({
  username:"",
  password:"",
  date:"",
  email:""
})

const getData=(e)=>{
  let {value,name}=e.target;


  setInpVal(()=>{
  return{
    ...inpVal,
    [name]:value
  }
})
}
let handleData=(e)=>{
  e.preventDefault()

  let {username,password,email,date}=inpVal
  if(username === ""){
    alert("username is required")
  }
  else if(password=== ""){
    alert("password is required")
}
  else if(email=== ""){
    alert("email is required")
  }
  
else if(date=== ""){
  alert("date of birth is required")
}
else{
  console.log({username,email,password,date});
  localStorage.setItem("username",username)
  localStorage.setItem("password",password)
  localStorage.setItem("email",email)
  localStorage.setItem("DOB",date)
  navigate('./login')
  alert("data added successfully"); 
}}
  return (
    <div className={STYLE.mainDiv}>
    <div className={STYLE.divBlock}>
      <h1 className={STYLE.h1Block}>SignUp</h1>
      <form action="">
      <label htmlFor="username">Username:</label>
      <br />
      <input type="text" onChange={getData} name="username" id="username" />
      <br />
      <label htmlFor="password">Password:</label>
      <br />
      <input type="password" onChange={getData}  name="password" id="password" />
      <br />
      <label htmlFor="email">Email::</label>
      <br />
      <input type="email" onChange={getData}  name="email" id="email" />
      <br />
      <label htmlFor="dob">DOB:</label>
      <br />
      <input type="date" onChange={getData}  id='dob' name='date' />
      <br />
      <button onClick={handleData} > Submit</button>
      </form> 
  
      <a href='./login' style={{backgroundColor:"yellow"}}>already have an account? login</a>
    </div>
    </div>
  )
}

export default SignUp
