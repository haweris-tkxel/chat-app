import React, { useEffect, useState } from "react";
import { onSnapshot, orderBy, query } from "firebase/firestore";

import { messagesRef } from "@/config/firebase";
import ChatHeader from "@/components/ChatHeader";
import MessageList from "@/components/MessageList";
import MessageInput from "@/components/MessageInput";
import ScrollableCanvas from "@/components/ScrollableCanvas";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [chatBoxToggle, setChatBoxToggle] = useState(false)
  const [currentReceiverName, setCurrentReceiverName] = useState("");

  useEffect(() => {
    const q = query(messagesRef, orderBy("time", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMessages(messagesArray);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <ScrollableCanvas
        setChatBoxToggle={setChatBoxToggle}
        setCurrentReceiverName={setCurrentReceiverName}
      />
      {chatBoxToggle && currentReceiverName && (
        <div className="fixed chat-app bg-white rounded-md shadow-md flex flex-col max-w-md top-[8%] right-[5%] bottom-[8%]">
          <ChatHeader
            setChatBoxToggle={setChatBoxToggle}
            name={currentReceiverName}
          />
          <MessageList
            currentReceiverName={currentReceiverName}
            messages={messages}
          />
          <MessageInput
            currentReceiverName={currentReceiverName}
            messages={messages}
            setMessages={setMessages}
          />
        </div>
      )}
    </div>
  );
};

export default ChatApp;
