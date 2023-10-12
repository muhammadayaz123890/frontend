import React from 'react'

const footer = () => {
  return (
    <div className="flex items-center  px-20">
    {/* Left Side (Paragraph) */}
    <div className="w-1/3 p-10">
      <h1 className="font-primary leading-normal text-xl text-slate-50">PRIVACY AND SECURITY</h1>
      <br></br>
      

  <p className="leading-normal text-xl text-slate-50">Privacy and security are our utmost priorities at BodyGate. We employ state-of-the-art encryption and data protection measures to ensure the confidentiality of your health 
    information. Our platform is designed with strict adherence to industry best practices, and we are commited to maintaining your trust. You have control over your data , and we will never share it whithout your explicit consent. Your well-being is not just a priority , it's a responsablity
    we take seriously.</p>
  {/* <h1>Privacy and security are our utmost priorities at BodyGate. We employ state-of-the-art encryption and data protzction measures to ensure the confidentiality of your health 
    information. Our platform is designed with strict adherence to industry best practices, and we are commited to maintaining your trust. You have control over your data , and we will never share it whithout your explicit consent. Your well-being is not just a priority , it's a responsablity
    we take seriously.
  </h1> */}
    </div>
     {/* Right Side (Image) */}




    <div className="w-2/3 p-20 grid grid-rows-2 grid-flow-col gap-4 ">
    <table className="w-full ">
        <thead>
          <tr>
            <th colspan="2"className="text-white ">Privacy Policy</th>
            <th colspan="2" className="text-white px-4 py-2">About </th>
            <th colspan="2" className="text-white px-4 py-2">Contact <br></br> info@bodegate.ai</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colspan="2" className="text-white px-4 py-2">Terms of use</th>
            <th colspan="2" className="text-white px-4 py-2">Team</th>
            <td  colspan="2" className=" px-4 py-2"></td>
          </tr>
          <tr>
            <td colspan="2" className="px-4 py-2"></td>
            <th colspan="2" className="text-white px-4 py-2">Paterns</th>
            <th colspan="2" className=" px-4 py-2"></th>
          </tr>
          <tr>
            <td colspan="2" className="px-4 py-2"></td>
            <th rowSpan="5" colspan="3" className="text-slate-400 px-4 py-2">&Copyrights, Daniel Nicolas, BodyGate.AI, All Rights Reserved July 2023.</th>
            <th colspan="2" className=" px-4 py-2"></th>
          </tr>

        </tbody>
      </table>
      
      </div>
      
      {/* <h1 className='text-white'>&Copyrights, Daniel Nicolas, BodyGate.AI, All Rights Reserved July 2023.</h1> */}
    
      </div>

  )
}

export default footer