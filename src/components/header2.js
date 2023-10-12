import React from 'react';

const header2 = () => {
  return (
    <div className='text-white flex flex-col justify-text px-96'>
        <div className='text-left space-x-2 '>
      <h1 className=' inline-block item-left font-istbold  p-0 mb-2 text-lg'><h1 className='inline-block   item-left font-istbold font-bold p-0 mb-2 '>
        "Welcome to the 'ASK SUSAN' page,</h1> your gateway to personalized health and wellness." </h1> 
     
      <p className='pl-0 mb-10'>
        You can seamlessly switch between different features by using the tabs below:
      </p></div>
      <ol className='list-decimal mb-0'>


  <li className='text-white mb-4 text-underline-offset-0 decoration-blue-300 underline decoration-from-font '>
    <h1 className='inline font-bold text-lg font-ist'>
      General Chat:
    </h1>
    <p className='inline  '>
      Engage in a natural conversation with Susan, your personal health companion. <br/ >
      Ask questions, seek advice, and receive tailored insights on your well-being.
    </p>
  </li>



        <li className='text-white mb-4 text-underline-offset-0 decoration-blue-300 underline decoration-from-font'>
          <h1 className='font-bold text-lg font-ist inline'>
            E-commerce:
          </h1>
          <p className='inline'>
            Explore a curated selection of health products and nutritional solutions<br /> recommended by Susan.<br />
            Shop with confidence, knowing you're making informed choices for your health.
          </p>
        </li>


        <li className='text-white mb-4 text-underline-offset-0 decoration-blue-300 underline decoration-from-font'>
          <h1 className='font-bold text-lg font-ist inline'>
            Forum:
          </h1>
          <p className='inline'>
            Connect with a community of health enthusiasts and professionals.<br />
            Share your experiences, gain valuable insights, and join discussions on various wellness topics.<br />
            
          </p>
        </li>
      </ol>
      <div className='mt-8 '>
      <h1>Whether you're here for personalized guidance, shopping for health products, <br />or engaging in meaningful discussions.
           </h1>
           <h1 className='m-8 font-sans-serif font-bold italic text-l '> 'ASK SUSAN' has you covered. Click on the respective tabs to navigate effortlessly."</h1></div>
      <h1 className='text-center text-yellow-400 mt-4 p-4'>And More To Come ...</h1>
    </div>
  );
};

export default header2;
