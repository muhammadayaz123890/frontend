import React, { useState } from "react";
import Message from "./Message"; // You'll create this component separately

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
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
        text: "Hello! I am your chatbot. How can I assist you?",
      };
      const updatedMessagesWithBot = [...updatedMessages, botMessage];
      setMessages(updatedMessagesWithBot);
    }, 1000);
  };

  
  
  
  
  
  return (
    <div className="w-96 mx-auto p-4 bg-white border rounded-lg shadow-lg">
      <div className="h-72 overflow-y-auto">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <div className="mt-2 flex items-center">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-lg border outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
