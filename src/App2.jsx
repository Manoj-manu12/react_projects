//===================================//
     //passing array as a prompt//
//===================================//

// import React from 'react'
// import Course from './Course'

// const App2 = () => {
//   return (
//     <div>
//    <Course data={{skills:["html","css","js"]}}/>

//     </div>
//   )
// }

// export default 

//===================================//
     //passing function as a prompt//
//===================================//


// import React from 'react'
// import Course from './Course';

// const App2 = () => {
//   return (
//     <div>
//         <Course data={()=>{
//             console.log("hello");
//         }}/>
//     </div>
//   )
// }

// export default App2

//===================================//
     //passing boolean as a prompt//
//===================================//

// import React from 'react'
// import Course from './Course';

// const App2 = () => {
//   return (
//     <div>
//   < Course course ={{ courseAvailable:false,
//                        courseName:"Java",
//                        courseDuration:"3 months"}}/>
//      < Course course ={{ courseAvailable:false,
//                        courseName:"Sql",
//                        courseDuration:"3 months"}}/>
//      < Course course ={{ courseAvailable:false,
//                        courseName:"Web technology",
//                        courseDuration:"3 months"}}/>

//     </div>
//   )
// }

// export default App2


//===================================//
     //passing json data as a prompt//
//===================================//

import React from 'react'
import Course from './Course.jsx';
import JSON from './course.json'
import "./global3.css"

const App2 = () => {
  return (
    <div>
        <Course data={JSON}/>
    </div>
  )
}

export default App2