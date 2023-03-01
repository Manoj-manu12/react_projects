import React from 'react'

const Formjs2 = () => {

    let handleForm=(e)=>{
           e.preventDefault()
        //    let username=document.querySelector('#Username').value
        //    let password=document.querySelector('#password').value
            let username=document.getElementById('Username').value
            let password=document.getElementById('password').value

           console.log({username,password});
    }


  return (
    <div>
        <form action="">
    <label htmlFor="Username">Username:</label>
    <br />
    <input type="text" id='Username' />
    <br />
    <label htmlFor="password">password:</label>
    <br />
    <input type="text" id='password' />
    <br />
    <button onClick={handleForm}>Submit</button>
</form>
</div>
  )
}

export default Formjs2