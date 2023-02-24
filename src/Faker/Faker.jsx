import React, { Component } from 'react'
import {faker} from '@faker-js/faker';

export default class Faker extends Component {
    constructor(){
        super()
        {
            this.state={PHOTO:faker.image.avatar()}
            this.state={NAME:faker.internet.userName()}
        }
    }
    handleChange=()=>{
        this.setState({PHOTO:faker.image.avatar()})
    }
    handleChange1=()=>{
        this.setState({NAME:faker.internet.userName()})
    }


  render() {
    return (
      <div>
<img src={this.state.PHOTO} alt="" />
<button onClick={this.handleChange}>click to change image</button>


<button onClick={this.handleChange1}>click to change name</button>


      </div>
    )
  }
}
