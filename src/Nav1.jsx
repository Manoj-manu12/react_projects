// import React from 'react'

// const Nav1 = (props) => {
//   return (
//     <div>{props.data}</div>
//   )
// }

// export default Nav1


// import React, { Component } from 'react'

// export default class Nav1 extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.data}
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'

export default class Nav1 extends Component {
  render() {
    return (
      <div>

        <img src={this.props.img} alt=""  />
      </div>
    )
  }
}

