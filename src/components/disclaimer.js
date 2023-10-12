import React from 'react'

const disclaimer = () => {
  return (
    <div className="flex justify-items-start px-20">
         <div className="w-1/2">
    <h1 className="text-7xl text-slate-50 font-bold">Disclaimer:</h1>

    </div>
    {/* Left Side (Paragraph) */}
    

    {/* Right Side (Image) */}
   <div className="w-1/2 p-4 text-center">
      <p className="leading-10 text-xl  text-slate-50">
Susan, your personal health companion, provides <br></br> general health and wellness information and recommendations.<br></br> While she offers valuable
guidance, <br></br>she is not a substitute for professional <br></br> medical, diagnosis or treatment. Always consult <br></br>
with a healthcare provider for any medical concerns <br></br>or conditions.
      </p>
      </div>
  </div>
  )
}

export default disclaimer