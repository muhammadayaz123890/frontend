import React from 'react';
import backgroundImage from '../images/abou.jpg'; // Adjust the path as needed

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center">
      <img
        alt=""
        className="w-full h-full object-cover opacity-80"
        src={backgroundImage}
      />
       <div class="text-yellow font-anton absolute w-full py-2.5 bottom-0 inset-x-0 font-bold text-white text-9xl text-center leading-8">About us</div>
</div>
      
    
  
  );
};

export default HeroSection;


