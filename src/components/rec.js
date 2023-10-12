import React from 'react'
import im from '../images/1.jpg'
const rec = () => {
  return (
    <div className="flex items-center justify-center px-20">
    {/* Left Side (Paragraph) */}
    
    <div className="w-1/3 p-10">
  <br></br>
      <img
        src={im}
        alt='img'
        className="h-96 w-96 " />
    </div>
     {/* Right Side (Image) */}




    <div className="w-2/3 p-20 space-x-20 ">
      
      <p className="leading-loose font-primary text-center leading-normal p-20 text-xl italic text-slate-50"> <h1 className='m-5 inline text-5xl'>  "</h1> I am passionate about fastering a culture <br></br> of continuous learning within our team. Together, <br></br>we explore a multitude of ideas across various fields,<br></br> shape BodyGat.ia into a holistic solution <br></br>for everyone's well-being.         <h1 className='m-5 inline text-5xl'>"</h1></p>
    </div>
  </div>
  )
}

export default rec