import React, { useState } from "react";
import { addDoc } from "firebase/firestore";
import { v4 as uuid } from 'uuid';

import { messagesRef } from "@/config/firebase";
import { senderName } from "@/config";

const MessageInput = ({currentReceiverName, messages, setMessages}) => {
  const sender = senderName(currentReceiverName)
  const [message, setMessage] = useState("");

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  const handleSend = async () => {
    if (!message.trim()) return;

    const newMessage = {
      id: uuid(),
      receiverName: currentReceiverName,
      senderName: sender,
      text: message,
      time: new Date(),
    };

    try {
      await addDoc(messagesRef, newMessage);
      addMessage(newMessage)
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="message-input flex items-center bg-gray-100 px-4 py-2 rounded-b-md">
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-lg"
      />
      <button
        onClick={handleSend}
        className="ml-2 bg-orange-500 text-white px-4 py-2 rounded-lg"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
