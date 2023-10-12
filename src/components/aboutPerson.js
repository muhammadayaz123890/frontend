import React from 'react';
import img1 from "../images/77.jpg"
import img2 from "../images/55.jpg"
import img3 from "../images/su.jpg"
import img4 from "../images/3.jpg"




const TeamPage = () => {
  return (
    <div className="flex ">
      {/* Left Side */}
      <div className="w-2m/3 flex flex-col">
      <div className="flex pb-4 p-8  ml-8">
      <img
        src={img1}
        alt="Wassim"
        className="border-4 w-48 h-48 scale-150  object-fill m-8"
      />
      <div className='ml-8 px-4 justify-start'>
        <h1 className="text-green-500 text-8xl font-semibold">Wassim</h1>
        <p className="mt-8 ml-5 tracking-wide leading-8 text-white text-2xl font-bold">The Data scientist <br></br> In-House Hardest <br></br>Working Genius</p>
      </div>
    </div>
    <div className="flex pb-4 p-8  ml-8">
      <img
        src={img2}
        alt="Diego"
        className="border-4 w-48 h-48 scale-150  object-fill m-8"
      />
      <div className='ml-8 px-4 justify-start'>
        <h1 className="text-green-500 text-8xl font-semibold">Diego</h1>
        <p className="mt-8 text-white text-xl font-bold">The Techno Professor <br></br> Who Questions Everything</p>
      </div>
    </div>
    <div className="flex pb-4 p-8  ml-8">
      <img
        src={img3}
        alt="Susan"
        className="border-4 w-48 h-48 scale-150  object-fill m-8"
      />
      <div className='ml-8 px-4 justify-start'>
        <h1 className="text-green-500 text-8xl font-semibold">Susan</h1>
        <p className="mt-8 text-white text-xl font-bold">The Inspiration <br></br> and Finance Director </p>
      </div>
    </div>
    <div className="flex pb-4 p-8  ml-8">
      <img
        src={img4}
        alt="Susan The Bot "
        className="border-4 w-48 h-48 scale-150  object-fill m-8"
      />
      <div className='ml-8 px-4 justify-start'>
        <h1 className="text-green-500 text-8xl font-semibold">"Susan <br></br> The Bot "</h1>
        <p className="mt-8 text-white text-xl font-bold">She Knows Everything</p>
      </div>
    </div>
     
      
      </div>

      {/* Vertical Line */}
      <div className="w-0.5 h-100 bg-gray-300 mr-20 mb-8 "></div>

      {/* Right Side */}
      <div className="w-1/3 flex flex-col mt-24 p-4">
       
      <p className="text-white font-istbold font-bold text-3xl text-center">
        These Are The Key <br></br> To The Whole <br></br> Project
        </p>
<br></br>
<br></br>        <span></span>
            <hr className="my-8 border-t-2 border-gray-300" />

            <div className=' mt-8 text-3xl font-bold text-center text-green-500'>
<h1>However, there are others<br></br> also very important to us <br></br> Such as:</h1>
    </div>
    <br></br>
    <div className=' mt-8 text-2xl font-bold text-center text-green-500'>
<h1>Mr. AltafHussain Sayed</h1>
<p className='text-white text-xl '> From: Nemetler Technologies</p>
    </div>
    <br></br>
    <div className=' mt-8 text-2xl font-bold text-center text-green-500'>
<h1>Mr.Adam Heller</h1>
<p className='text-white text-xl '> From: Zero Pain Now</p>
</div>
<br></br>
    <div className=' mt-8 text-2xl font-bold text-center text-green-500'>
<h1>Mr.Franco Ronconi</h1>
<p className='text-white text-xl '> Business Operations Manager</p>
</div>
    
<br></br>
    <div className=' mt-8 text-2xl font-bold text-center text-green-500'>
<h1>Just to name a few</h1>

</div>  
    
    
    
    
    
    
    
    
    
      </div>  

    </div>
  );
};

export default TeamPage;
