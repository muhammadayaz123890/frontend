// import { useState } from 'react'
// import { Tab } from '@headlessui/react'

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//     const [activeTab, setActiveTab] = useState(1);
//     const [inputMessage, setInputMessage] = useState('');
//     const [messageHistory, setMessageHistory] = useState([]);
  
//     const handleTabClick = (tabNumber) => {
//       setActiveTab(tabNumber);
//     };
  
//     const handleInputChange = (e) => {
//       setInputMessage(e.target.value);
//     };
  
//     const handleSubmit = () => {
//       if (inputMessage.trim() === '') return;
  
//       // Add the user's message to the message history
//       setMessageHistory((prevHistory) => [
//         ...prevHistory,
//         { text: inputMessage, user: true },
//       ]);
  
//       // Clear the input field
//       setInputMessage('');
//     };
  
//   let [categories] = useState({
//     AskSusan: [
//       {
//         id: 1,
//         title: 'Does drinking coffee make you smarter?',
//         date: '5h ago',
//         commentCount: 5,
//         shareCount: 2,
//       },
//       {
//         id: 2,
//         title: "So you've bought coffee... now what?",
//         date: '2h ago',
//         commentCount: 3,
//         shareCount: 2,
//       },
//     ],
//     RecommendationsShop : [
//       {
//         id: 1,
//         title: 'Is tech making coffee better or worse?',
//         date: 'Jan 7',
//         commentCount: 29,
//         shareCount: 16,
//       },
//       {
//         id: 2,
//         title: 'The most innovative things happening in coffee',
//         date: 'Mar 19',
//         commentCount: 24,
//         shareCount: 12,
//       },
//     ],
//     TalkToAProfessional: [
//       {
//         id: 1,
//         title: 'Ask Me Anything: 10 answers to your questions about coffee',
//         date: '2d ago',
//         commentCount: 9,
//         shareCount: 5,
//       },
//       {
//         id: 2,
//         title: "The worst advice we've ever heard about coffee",
//         date: '4d ago',
//         commentCount: 1,
//         shareCount: 2,
//       },
//     ],
//   })

//   return (
//     <div className="w-screen h-screen ">
//       <Tab.Group>
//         <Tab.List className="flex space-x-2 rounded-xl bg-gray-300 ">
//           {Object.keys(categories).map((category) => (
//             <Tab
//               key={category}
//               className={({ selected }) =>
//                 classNames(
//                   'w-full rounded-lg py-5 text-sm font-medium leading-8 text-blue-700',
//                   'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
//                   selected
//                     ? 'bg-yellow shadow'
//                     : 'text-blue-100 hover:bg-yellow/[0.12] hover:text-white'
//                 )
//               }
//             >
//               {category}
//             </Tab>
//           ))}
//         </Tab.List>
//         <Tab.Panels className="mt-8">
//           {Object.values(categories).map((posts, idx) => (
//             <Tab.Panel
//               key={idx}
//               className={classNames(
//                 'rounded-xl bg-white p-2',
//                 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
//               )}>
//      <div className="mt-0 p-2 border-b flex ">
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={inputMessage}
//           onChange={handleInputChange}
//           className="w-full px-4 py-2 border rounded-md"
//         />
//         <button
//           onClick={handleSubmit}
//           className="m-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//         >
//           Send
//         </button>
//       </div>

//       {/* Message history area at the bottom */}
//       <div className="p-48">
//         {messageHistory.map((message, index) => (
//           <div
//             key={index}
//             className={`mb-2 ${
//               message.user ? 'text-right' : 'text-left'
//             } ${message.user ? 'text-blue-700' : 'text-gray-700'}`}
//           >
//             {message.text}
//           </div>
//         ))}
//       </div> 
//               {/* <ul>
//                 {posts.map((post) => (
//                   <li
//                     key={post.id}
//                     className="relative rounded-md p-3 hover:bg-gray-100"
//                   >
//                     <h3 className="text-sm font-medium leading-5">
//                       {post.title}
//                     </h3> */}

//                     {/* <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
//                       <li>{post.date}</li>
//                       <li>&middot;</li>
//                       <li>{post.commentCount} comments</li>
//                       <li>&middot;</li>
//                       <li>{post.shareCount} shares</li>
//                     </ul>  */}

//                      {/* <a
//                       href="/h"
//                       className={classNames(
//                         'absolute inset-0 rounded-md',
//                         'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
//                       )}
//                     />  
//                   </li>
//                 ))}
//               </ul>*/}
//             </Tab.Panel>
//           ))}
//         </Tab.Panels>
//       </Tab.Group>
//     </div>
//   )
// }





// import React from 'react';

// const Chatbot = ({ topWidth, bottomWidth, height, color }) => {
//   const trapezoidStyle = {
//     borderBottomWidth: `${height}px`,
//     borderBottomColor: color,
//     borderBottomStyle: 'solid',
//     // borderLeftWidth: `${topWidth / 2}px`,
//     // borderLeftColor: 'transparent',
//     // borderLeftStyle: 'solid',
//     borderRightWidth: `${topWidth / 2}px`,
//     borderRightColor: 'transparent',
//     borderRightStyle: 'solid',
//   };

//   return (
//     <div className="pl-48 trapezoid w-48 border-rounded" style={trapezoidStyle}></div>
//   );
// };

// export default Chatbot;













// import React, { useState } from 'react';

// const Chatbot = () => {
//   const [activeTab, setActiveTab] = useState(1);
//   const [inputMessage, setInputMessage] = useState('');
//   const [messageHistory, setMessageHistory] = useState([]);

//   const handleTabClick = (tabNumber) => {
//     setActiveTab(tabNumber);
//   };

//   const handleInputChange = (e) => {
//     setInputMessage(e.target.value);
//   };

//   const handleSubmit = () => {
//     if (inputMessage.trim() === '') return;

//     // Add the user's message to the message history
//     setMessageHistory((prevHistory) => [
//       ...prevHistory,
//       { text: inputMessage, user: true },
//     ]);

//     // Clear the input field
//     setInputMessage('');
//   };

//   return (
//     <div className="max-w-xl flex flex-col mx-auto mt-4">
//       {/* Tabs at the top */}
//       <div className="bg-blue-500 text-white p-2 border">
//         <div className="flex justify-between">
//           <div
//             className={`cursor-pointer p-2 ${
//               activeTab === 1 ? 'bg-yellow-400' : ''
//             }`}
//             onClick={() => handleTabClick(1)}
//           >
//             Tab 1
//           </div>
//           <div
//             className={`cursor-pointer p-2 ${
//               activeTab === 2 ? 'bg-yellow-400' : ''
//             }`}
//             onClick={() => handleTabClick(2)}
//           >
//             Tab 2
//           </div>
//           <div
//             className={`cursor-pointer p-2 ${
//               activeTab === 3 ? 'bg-yellow-400' : ''
//             }`}
//             onClick={() => handleTabClick(3)}
//           >
//             Tab 3
//           </div>
//         </div>
       
//       </div>
//  <br></br>
//  <br></br>
//       {/* Message input area in the middle */}
    //   <div className="p-4 border-b">
    //     <input
    //       type="text"
    //       placeholder="Type your message..."
    //       value={inputMessage}
    //       onChange={handleInputChange}
    //       className="w-full px-4 py-2 border rounded-md"
    //     />
    //     <button
    //       onClick={handleSubmit}
    //       className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    //     >
    //       Send
    //     </button>
    //   </div>

    //   {/* Message history area at the bottom */}
    //   <div className="p-4">
    //     {messageHistory.map((message, index) => (
    //       <div
    //         key={index}
    //         className={`mb-2 ${
    //           message.user ? 'text-right' : 'text-left'
    //         } ${message.user ? 'text-blue-700' : 'text-gray-700'}`}
    //       >
    //         {message.text}
    //       </div>
    //     ))}
    //   </div>
//     </div>
//   );
// };

// export default Chatbot;
