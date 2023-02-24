import React from 'react'
import Parent from './Parent';

const Grandparent = (props) => {
   
  return (
    <div className='GP'>
        <strong>Grandparent</strong>
       
    <Parent data={props.data}/>
    
    </div>
  )
}

export default Grandparent