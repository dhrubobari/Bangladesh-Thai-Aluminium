import React from 'react'
import videoBg from '../../assets/videoBg.mp4'

export default function Banner() {
  return (
    <div className="banner">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
        <h1>Making Life <span className='h1-span'>Safer Everyday</span></h1>
    </div>
    </div>
  )
}
