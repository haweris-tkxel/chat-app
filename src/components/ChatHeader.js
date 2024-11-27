import React from 'react';

const ChatHeader = ({setChatBoxToggle, name}) => {
  return (
    <div className="chat-header bg-orange-500 text-white flex items-center justify-between px-4 py-2 rounded-t-md">
      <h3 className="text-lg font-semibold">Chat</h3>
      <h2>{name}</h2>
      <button
        className="close-btn text-white text-2xl"
        onClick={() => setChatBoxToggle(false)}
      >
        &times;
      </button>
    </div>
  );
};

export default ChatHeader;
