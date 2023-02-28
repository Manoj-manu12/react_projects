import React from 'react'

const Hook = () => {
  let[image,SetImage]=React.useState("https://w7.pngwing.com/pngs/617/361/png-transparent-the-dark-knight-joker-batman-film-actor-joker-heroes-poster-villain-thumbnail.png");

  return (
    <div>
      <img src={image} alt="" />
<button  onClick={()=>{
  SetImage("https://e7.pngegg.com/pngimages/94/125/png-clipart-batman-bane-joker-catwoman-the-dark-knight-trilogy-batman-heroes-superhero-thumbnail.png")
}}>click</button>
    </div>
  )
}

export default Hook
