import React from "react";
import ChatBot from "react-simple-chatbot";



function CustomChatbot(props) {
  const config = {
    width: "300px",
    height: "400px",
    floating: true,
  };
  const steps = [
    {
      id: "Greet",
      message: "Hello, this is our streaming App",
      trigger: "Done"
    },
    {
      id: "Done",
      message: "How can I help you?",
      end: true
    }
  ];

  return <ChatBot steps={steps} {...config} />;
}
export default CustomChatbot;