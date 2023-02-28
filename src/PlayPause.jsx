import React, { useRef, useState } from 'react'
import VIDEO1 from './videoTest.mp4'

const PlayPause = () => {
  let [video, setVideo]=useState(VIDEO1);
  let [play,setPlay]=useState(false);
  let videoRef =useRef()
  let handleChange=()=>{
    if(!play)
    {
      setPlay(true)
      videoRef.current.play()
    }
    else{
      setPlay(false)
      videoRef.current.pause()
    }
  }
  return (
    <div>
      <video src={video} alt="" ref={videoRef} onClick={handleChange}></video>
    </div>
  )
}

export default PlayPause