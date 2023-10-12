import React from 'react'
import { Link } from 'react-router-dom'
import su from '../images/su.jpg'
const begin = () => {
  return (
    <div className="flex items-center justify-center px-20">
    {/* Left Side (Paragraph) */}
    
    <div className="w-1/2 p-10">
    <h1 className="leading-tight text-8xl text-slate-50">Introducing</h1>
<br></br>
    <h1 className="leading-tight text-8xl text-slate-50 font-bold italic">Susan!</h1>
  <br></br>
  <Link to="/about_us">
      <img
        src={su}
        alt='img'
        className="h-96 w-96 rounded-lg " /></Link>
    </div>
     {/* Right Side (Image) */}




    <div className="w-1/2 p-4 space-y-10 ">
      <p className="leading-tight text-5xl text-slate-50">
        Your personalized<br></br> Health Journey
      </p>
      <h1 className="leading-normal text-8xl text-slate-50 font-bold">Begins Here!</h1>
      <p className="leading-normal text-4xl text-slate-50">Transforming Health,<br></br>One Conversation at a Time </p>
    </div>
  </div>
  )
}

export default begin