import React from 'react'
import Navbar from '../components/Navbar2'
import Header from '../components/header2'
import ChatArea from '../components/ChatArea'
const Susan = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
   
        <Navbar />
        <br></br>
        <div className='flex justify-center p-20'>
            <h1 className='text-white font-bold text-8xl tracking-widest text-amber-500'>Ask Susan</h1>
           
        </div>
         <Header/>
         {/* <div className='border-rounded flex p-20'>
         <Chatbot topWidth={100} bottomWidth={500} height={50} color="blue" />    
             <Chatbot/>
       </div> */}


 
        <div className="border  mt-8 pr-8">

<ChatArea/>

        </div>
        </div>

  )
}

export default Susan