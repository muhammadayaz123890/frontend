import React from 'react'
import img from '../images/hhh.png'
const Intro = () => {
  return (
    <div className="flex items-center justify-center px-20">
    {/* Left Side (Paragraph) */}
    <div className="w-1/2 p-4 ">
      <p className="leading-normal text-4xl text-slate-50">
        Your personalized Health Journey
      </p>
      <h1 className="leading-normal text-8xl text-slate-50 font-bold">Begins Here!</h1>
      <p className="leading-normal text-4xl text-slate-50">Transforming Health,<br></br>One Conversation at a Time </p>
    </div>

    {/* Right Side (Image) */}
    <div className="w-1/2 p-4  ">
      <img
        src={img}
        alt='img'
        className="w-full h-auto " />
    </div>
  </div>
  )
}

export default Intro