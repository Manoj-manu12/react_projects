import React, { Component, createRef } from 'react'

export default class Form3UC extends Component {
    constructor(){
        super()
        this.userRef=createRef()
        this.passRef=createRef()
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        let username=this.userRef.current.value
        let password=this.passRef.current.value
        console.log({username,password});
    }
    
  render() {
    return (
      <div>
        <form action="">
            <label htmlFor="Username">Username:</label>
            <br />
            <input type="text" id='Username' ref={this.userRef} />
            <br />
            <label htmlFor="password">password:</label>
            <br />
            <input type="text" id='password'  ref={this.passRef}/>
            <br />
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
