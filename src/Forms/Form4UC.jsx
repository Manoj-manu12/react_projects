import React,{useRef} from 'react'

const Form4UC = () => {
 
   let userRef=useRef()
   let passRef=useRef()

   let handleSubmit=(e)=>{
     e.preventDefault()

     let username= userRef.current.value 
     let password = passRef.current.value
     console.log({username,password});
   }

  return (
    <div>
        <form action="">
    <label htmlFor="Username">Username:</label>
    <br />
    <input type="text" id='Username' ref={userRef} />
    <br />
    <label htmlFor="password">password:</label>
    <br />
    <input type="te.xt" id='password' ref={passRef} />
    <br />
    <button onClick={handleSubmit} >Submit</button>
</form>
    </div>
  )
}

export default Form4UC