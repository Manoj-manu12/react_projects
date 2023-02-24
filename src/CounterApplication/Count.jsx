import React, { Component } from 'react'

export default class Count extends Component {
 constructor(){
    super()
   this.state={count:0}

 }

 handleIncrement=()=>{
    this.setState({count:this.state.count+1})
 }
 handleDecrement=()=>{
    this.setState({count:this.state.count-1})
 }
 handleReset=()=>{
    this.setState({count:0})
 }

  render() {
    return (

      <div className='mainDiv' >
       
        <div className='mainBlock'>
        <h1>{this.state.count}</h1>
        </div>
       
        <div className='btngrp'>
         <button onClick={this.handleIncrement} style={{backgroundColor:"gold"}}>+ Increment</button>
        <button onClick={this.handleDecrement} style={{backgroundColor:"gold"}}>- Decrement</button>
        <button onClick={this.handleReset} style={{backgroundColor:"gold"}}>Reset</button>
        </div>
      </div>
    )
  }
}
