import { CpuChipIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ChatArea = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Simulate the initial message from the bot when the component mounts
    const botMessage = {
      role: "bot",
      text: "Hello! I am Susan. How can I assist you?",
    };
    setMessages([botMessage]);
  }, []);

  useEffect(() => {
    // Scroll to the bottom of the chat area when messages change
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (inputMessage.trim() === "") return;

    // Create a new user message
    const userMessage = {
      role: "user",
      text: inputMessage,
    };

    // Add the user message to the message list
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    // Reset the input field
    setInputMessage("");

    // Simulate a bot response (you'll implement the bot logic)
    setTimeout(() => {
      const botMessage = {
        role: "bot",
        text: "I received your message. Let me find an answer for you.",
      };
      const updatedMessagesWithBot = [...updatedMessages, botMessage];
      setMessages(updatedMessagesWithBot);
    }, 1000);
  };

  let [categories] = useState({
    "Ask Susan": [
      { 
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    "Recommendations Shop": [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
   "Talk To A Professional": [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="text-white  m-8 relative">
      <Tab.Group>
        <Tab.List className="flex space-x-2 rounded-xl bg-gray-300 ">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-5 text-sm font-medium leading-8 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-yellow shadow'
                    : 'text-blue-100 hover:bg-yellow/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
      <div className="border-5 border-zinc-100 bg-zinc-600 rounded-md">
        <div className=" rounded-md  h-[8vh] w-[190vh] bg-zinc-700 shadow-lg absolute opacity-95 flex text-white items-center justify-between md:justify-start p-5 font-semibold text-lg">
          <Link
            to={"/ai"}
            className="border-2  rounded-md hover:bg-zinc-700 block md:hidden"
          >
            <CpuChipIcon className="w-6" />
          </Link>
          <span>ASK SUSAN</span>
        </div>
        <div className="text-zinc-800 px-20 md:px-20 h-[60vh]  flex flex-col scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-full scrollbar-thin pt-[8vh]" ref={chatContainerRef}>
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
        <form
          className="h-[12vh] w-[190vh] flex md:px-12 py-5 space-x-2  "
          onSubmit={handleSubmit}
        >
          <input
            placeholder="Type your message here..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            type="text"
            className="flex-1 bg-zinc-200 blur-none font-bold text-zinc-800 border-2 border  border-zinc-800 rounded-r rounded-md focus:ring-zinc-500 focus:border-zinc-500"
          />
          <button
            disabled={
              !/\S/.test(inputMessage)
                ? true
                : inputMessage.length < 2
                ? true
                : false
            }
            type="submit"
            className="bg-zinc-700 p-2 flex justify-center items-center rounded-md enabled:hover:bg-zinc-600 disabled:text-zinc-600 text-zinc-300 disabled:cursor-not-allowed"
          >
            <PaperAirplaneIcon className="h-5 w-5 " />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatArea;

