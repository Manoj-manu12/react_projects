
//===================================//
     //passing array as a prompt//
//===================================//
// import React from 'react'

// const Course = (props) => {
//   return (
//     <div>
//         <ol type='I'>
//        {
//         props.data.skills.map(
//             (x)=>{
//                 return<li>
//                     {x}
//                 </li>
//             }
//         )
//        } 

//         </ol>
//     </div>
//   )
// }

// export default Course

//===================================//
     //passing function as a prompt//
//===================================//


// import React from 'react'

// const Course = (props) => {
//   return (
//     <button onClick={props.data}>click</button>
//   )
// }

// export default Course


// ===================================//
//      passing boolean as a prompt//
// ===================================//

// import React from 'react'

// const Course = (props) => {
//   if(props.course.courseAvailable===true)
// {
// return(
//     <>
//     <h1>{props.course.courseName}</h1>
//     <button style={{backgroundColor:"green"}}>Available</button>
//     </>
// )
// }
// else{
//     return(
//         <>
//         <h1>{props.course.courseName}</h1>
//         <button style={{backgroundColor:"red"}}>Not Available</button>
//         </>
//     )
// }
// }
// export default Course


//===================================//
     //passing json data as a prompt//
//===================================//

import React, { Component } from 'react'

export default class Course extends Component {
  render() {
    var payloadData=this.props.data
    return (
      <div className='mainBlock'>
<center>
    <div>
        <img src={payloadData[0].photo} alt='' ></img>
        <h1 style={{color:"red"}}>{payloadData[0].name}</h1>
        <h2>{payloadData[0].cost}</h2>
        <h3>{payloadData[0].timings}</h3>
        <h2>{payloadData[0].location}</h2>
    </div>
</center>
<center>
    <div>
        <img src={payloadData[1].photo} className='img2' alt=''></img>
        <h1 style={{color:"red"}}>{payloadData[1].name}</h1>
        <h2>{payloadData[1].cost}</h2>
        <h3>{payloadData[1].timings}</h3>
        <h2>{payloadData[1].location}</h2>
    </div>
</center>
<center>
    <div>
        <img src={payloadData[2].photo} className='img3' alt=''></img>
        <h1 style={{color:"red"}}>{payloadData[2].name}</h1>
        <h2>{payloadData[2].cost}</h2>
        <h3>{payloadData[2].timings}</h3>
        <h2>{payloadData[2].location}</h2>
    </div>
</center>   
      </div>
    )
  }
}