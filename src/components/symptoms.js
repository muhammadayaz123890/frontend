import React from 'react'
import im from '../images/11.jpg'

const symptoms = () => {
  return (
    <div>
    <div className="flex items-center justify-center px-20">
    {/* Left Side (Paragraph) */}
    
    <div className="w-1/2 p-10">
    <h1 className="leading-tight text-3xl font-bold text-slate-50">Don't Wait Symptoms</h1>
<br></br>
      
    </div>
     {/* Right Side (Image) */}
{/* 
    <div className="w-1/2 p-4 space-y-10 text-center">
      <p className="leading-normal  text-3xl text-slate-50">
       Be Pro-Active Avoid  <br></br>Unnecessary Visits To<br></br> The Doctor
      </p>
       </div> */}
    </div>
<div className='flex justify-center px-20'>
    <img
        src={im}
        alt='img'
        className="h-96 w-full rounded-lg  " /></div>
{/* transition-transform transform hover:scale-110 */}

  </div>
  )
}

export default symptoms