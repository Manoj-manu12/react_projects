import React from 'react'
import { ToastContainer ,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Toast = () => {
  return (
    <div>

       < ToastContainer/>
       <h1>Toast</h1>
       <button onClick={()=>{
        toast.success('SUCCESS',{
            position:toast.POSITION.TOP_CENTER
        })

       }}>success</button>

        <button onClick={()=>{
        toast.error('INVALID',{
            position:toast.POSITION.TOP_RIGHT
        })

       }}>Error</button>

        <button onClick={()=>{
        toast.warning('warning',{
            position:toast.POSITION.TOP_LEFT
        })

       }}>warning</button>

    <button onClick={()=>{
        toast.loading('loading',{
            position:toast.POSITION.BOTTOM_CENTER
        })

       }}>loading</button>

        <button onClick={()=>{
        toast.info('loading',{
            position:toast.POSITION.BOTTOM_LEFT
        })

       }}>information</button>

    </div>
  )
}

export default Toast