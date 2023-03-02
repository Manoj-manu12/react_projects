import React ,{useState}from 'react'

const FormC6 = () => {
  let[username,setUsername]=useState("")
  let[password,setPassword]=useState("")
  let[gender,setGender]=useState("")

 let handleSubmit=(e)=>{
        e.preventDefault()
        console.log({username,password,gender})
 }



  return (
    <div>
         <form action="">
    <label htmlFor="Username">Username:</label>
    <br />
    <input type="text" id='Username' onChange={(e)=>{
        setUsername(e.target.value)
    }} />
    <br />
    <label htmlFor="password">password:</label>
    <br />
    <input type="text" id='password'  onChange={(e)=>{
        setPassword(e.target.value)
    }}/>
    <br />
    <label htmlFor="gender">Gender:</label>
    <br />
   Male <input type="radio" name='gender' value='male' onChange={(e)=>{
    setGender(e.target.value)
   }} />
   Female <input type="radio" name='gender' value='female' onChange={(e)=>{
    setGender(e.target.value)
   }}/>
   <br />
    <button onClick={handleSubmit}>Submit</button>
</form>
    </div>
  )

}

export default FormC6