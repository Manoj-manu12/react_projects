import React from 'react'
import Grandparent from './Grandparent'
import './global4.css'

const App3 = () => {
  return (
    <div className='app'>
        <strong>ROOT</strong><br />
        <Grandparent data="Raj" />
    </div>
  )
}

export default App3