import React from 'react'
import img from '../img/image.jpg'
function Background() {
  const myStyle={
    backgroundImage:`url(${img})`,
            height:'105vh',
            marginTop:'-100px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            };
  return (
    <div style={myStyle} ></div>
  )
}

export default Background