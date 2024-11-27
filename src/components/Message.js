import React from 'react';
// import { format } from 'date-fns';

const Message = ({ currentReceiverName, receiver, text, time }) => {
  const isUser = receiver === currentReceiverName;
  // const formattedTime = format(new Date(time), 'p');

  return (
    <div className={`message mb-4 ${isUser ? 'text-right' : ''}`}>
      <div
        className={`inline-block px-4 py-2 rounded-lg break-words max-w-[80%] ${
          isUser ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        {text}
      </div>
      <p className="text-xs text-gray-500 mt-1">{time}</p>
    </div>
  );
};

export default Message;
