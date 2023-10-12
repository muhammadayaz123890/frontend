import React from 'react'
import Abouts from '../components/About'
import Navbar from '../components/Navbar2'
import HeroSection from '../components/heosection'
import PersonCard from '../components/aboutPerson'
import die from '../images/dd.png'
const About = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
   
    <Navbar />
    <HeroSection/>
    <br></br>
    <div>
        <Abouts/></div>
        <hr className="my-8 border-t-5 border-gray-300" />
        <PersonCard />
        <div className="w-2/3 flex justify-end items-center">
          {/* Image centrée à droite */}
          <img alt="" src={die} className="max-h-screen" />
        </div>
        </div>
  )
}

export default About