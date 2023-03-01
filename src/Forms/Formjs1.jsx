import React, { Component } from 'react'

export default class Formjs1 extends Component {
   
    componentDidMount(){
        let form=document.querySelector("form")
        form.addEventListener("submit", (e)=>{
            e.preventDefault()


            let Username=document.getElementById('Username').value
            let password=document.getElementById('password').value
            console.log({Username,password});
            // document.writeln(Username)
            // document.writeln(password)
            
        })
    }
  render() {
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
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
