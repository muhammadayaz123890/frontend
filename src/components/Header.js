import React from 'react';
import header from '../videos/header.mp4';

const Header = () => {
  return (
    <div className="relative w-screen h-screen">
      <video src={header} autoPlay loop muted className="w-full h-full object-cover opacity-70" />

      {/* Overlay Text */}
      <div className="tracking-wider font-myriadpro absolute inset-0 flex flex-col justify-center w-full ">
        <h1 className="leading-tight tracking-wide text-white text-7xl text-left px-20 ">
          Empowering Wellness with <br></br>
          BODYGATE.AI <br></br>for  a Healthier World
        </h1>
        <p className="leading-tight text-slate-300 font-bold text-3xl text-center font-myriadregular m-20 px-20">
          
          Bodygate.ai is a powerful cutting-edge health chatbot <br></br>
powred by advanced language models, offering personalized health    
support   </p>
      </div>
    </div>
  );
};

export default Header;