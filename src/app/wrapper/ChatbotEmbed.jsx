"use client";
import { useEffect, useState } from "react";
import { FaMessage } from "react-icons/fa6";

export default function ChatbotEmbed() {
  const [showChatbot, setShowChatbot] = useState(false);
  const chatbotId = process.env.NEXT_PUBLIC_CHATBOT_ID;

  useEffect(() => {
    // Load Chatbase script
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    document.head.appendChild(script);

    // Cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  if (!chatbotId) {
    return <p>Chatbot ID not found</p>;
  }

  if (!showChatbot) {
    return (
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="right-4 bottom-4 fixed flex justify-center items-center bg-blue-600 rounded-full w-12 h-12 text-white"
      >
        <FaMessage size={24} />
      </button>
    );
  }

  return (
    <section className="right-16 bottom-16 fixed w-96 h-[500px]">
      <iframe
        src={`https://www.chatbase.co/chatbot-iframe/${chatbotId}`}
        className="rounded-lg w-full h-full"
        frameBorder={0}
      ></iframe>
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="right-4 bottom-4 fixed flex justify-center items-center bg-blue-600 rounded-full w-12 h-12 text-white"
      >
        <FaMessage size={24} />
      </button>
    </section>
  );
}
