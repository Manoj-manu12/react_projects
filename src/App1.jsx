// import React from 'react'
// import Nav1 from './Nav1'

// const App1 = () => {
//   return (
//     <div>

//         <Nav1 data="hello"/>
//     </div>
//   )
// }

// export default App1

// import React, { Component } from 'react'
// import Nav1 from './Nav1'

// export default class App1 extends Component {
//   render() {
//     return (
//       <div>
// <Nav1 data="Bye"/>
//       </div>
//     )
//   }
// }
import React from 'react'
import Image from "./Images/joker.png.png"
import Nav1 from './Nav1';

const App1 = () => {
  return (
    <div>

      <Nav1 img={Image}/>
    </div>
  )
}

export default App1
