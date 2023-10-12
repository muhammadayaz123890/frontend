import React from 'react'
import im from '../images/11.jpg'
import imm from '../images/22.jpg'
import i from '../images/33.jpg'



const cando = () => {
  return (
    <div className=" justify-items-start px-20">
        <h1 className='leading-relaxed text-6xl text-slate-50 font-bold"'>Susan can do For You:</h1>
        <br></br>
    <div className='grid grid-cols-3 gap-8 '>
        <div>
            <img
            src={im}
            alt=''
            className='transition-transform transform hover:scale-110'/>
        </div>
        <div>
            <img
            src={imm}
            alt=''
            className='transition-transform transform hover:scale-110'/>
        </div>
        <div>
            <img
            src={i}
            alt=''
            className='transition-transform transform hover:scale-110'/>
        </div>
    </div>
    <div className='grid grid-cols-2 gap-20 p-20 '>
        <div className='text-start leading-8'>
    <ul className="list-outside text-slate">
  <li className='list-disc text-slate-50'>
    <h1 className="inline font-bold text-2xl">Integration with Wearable :</h1> <p className="inline font-primary text-xl">Sync data from health tracking Wearable.</p><br></br>
    </li>
    <br></br>
    <li className='list-disc text-slate-50'>
    <h1 className="inline font-bold text-2xl">Symptom Checker :</h1> <p className="inline font-primary text-xl"> Assess symptoms and provide initial guidance.</p><br></br>
    </li>
    <br></br>
    <li className='list-disc text-slate-50'>
    <h1 className="inline font-bold text-2xl">Fitness Recommendations: </h1> <p className="inline font-primary text-xl">Provide tailored workout routines and tips. </p><br></br>
    </li>
    <br></br>
    <li className='list-disc text-slate-50'>
    <h1 className="inline font-bold text-2xl">Mental Health Support:</h1> <p className="text-xl inline font-primary">Offers resources and stress management advice.</p><br></br>
    </li>
    <br></br>

    <li className='list-disc text-slate-50'>
    <h1 className="inline font-bold text-2xl">Emergency Assistance:</h1> <p className="text-xl inline font-primary">Suggest meals plan and nutritional informations.</p><br></br>
    </li>
    <br></br>   

    <li className='list-disc text-slate-50'>
    <h1 className="inline font-bold text-2xl">Health Insights:</h1> <p className="text-xl inline font-primary">Offer Insights into your health and wellness.</p><br></br>
    </li>
    <br></br>
   

  
</ul>

</div>
<div className='text-start leading-8'>
    <ul class="list-outsidetext-slate">
 <li className='list-disc text-slate-50'>
    <h1 className="inline font-bold text-2xl">Medical Record Management:</h1> <p className="text-xl inline font-primary">Organize and manage your medical records.</p><br></br>
    </li>
    <br></br>
    <li className='list-disc text-slate-50'>
    <h1 className="inline font-bold text-2xl">Health Analytics:</h1> <p className="text-xl inline font-primary">Analyze your health data for trends and risks.</p><br></br>
    </li> <br></br>

    <li className='list-disc text-slate-50'>
    <h1 className="inline font-bold text-2xl">Medication Reminders:</h1> <p className="text-xl inline font-primary">Sends timely medicatio and supplement reminders.</p><br></br>
    </li>
    <br></br>
    <li className='list-disc text-slate-50'>
    <h1 className="inline font-bold text-2xl">Health Goal Tracking:</h1> <p className="text-xl inline font-primary">Set and track health goals with guidance.</p><br></br>
    </li>
    <br></br>
    <li className='list-disc text-slate-50'>
    <h1 className="inline font-bold text-2xl">Trend Analysis:</h1> <p className="text-xl inline font-primary">Track your health progress over time.</p><br></br>
    </li>
    <br></br>
    <li className='list-disc text-slate-50'>
    <h1 className="inline font-bold text-2xl">Personalized Recommendations:</h1> <p className="text-xl inline font-primary">Suggest lifestyle changes and improvements.</p><br></br>
    </li>
    <br></br>
</ul>

</div>


    </div>
    
    </div>
  )
}

export default cando