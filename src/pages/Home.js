import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Intro from '../components/intro'
import Begin from '../components/begin'
import Disclaimer from '../components/disclaimer'
import Cando from '../components/cando'
import Symp from '../components/symptoms'
import Rec from '../components/rec'
import Footer from '../components/footer'


const Home = () => {

  


  return (
    
    <div className="bg-primary w-full overflow-hidden">
   
        <Navbar />

        <Header/>
        <hr className="mb-8 m-10 border-gray-300" />
        <Intro/>
        <hr className="m-10 my-2  border-gray-300" />
        <Begin/>
        <hr className="my-2 m-10 border-gray-300" />
        <Disclaimer/>
        <hr className="my-2 m-10 border-gray-300" />
        <Cando/>
        <hr className="my-2 m-10 border-gray-300" />
        <Symp/>
        <hr className="my-2 m-10 border-gray-300" />
        <Rec/>
        <hr className="my-2 m-10 border-gray-300" />
        <Footer/>





    </div>
 
  )
}

export default Home