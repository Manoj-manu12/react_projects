import React, { Component } from 'react'

export default class FormC5 extends Component {
    constructor(){
        super()
        this.state={
            username:"",
            password:""
        }
    }

handleSubmit=(e)=>{
e.preventDefault()

let username=this.state.username
let password=this.state.password
console.log({username,password})
  }


  render() {
   
    return (
      <div>
        <form action="">
    <label htmlFor="Username">Username:</label>
    <br />
    <input type="text" id='Username' onChange={(e)=>{
       this.setState({username:e.target.value})
    }} />
    <br />
    <label htmlFor="password">password:</label>
    <br />
    <input type="text" id='password'  onChange={(e)=>{
        this.setState({password:e.target.value})
    }}/>
    <br />
    <button onClick={this.handleSubmit}>Submit</button>
</form>
      </div>
    )
  }
}
