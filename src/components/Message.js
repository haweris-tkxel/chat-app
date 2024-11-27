import React from 'react';
import { formatDate } from '@/config';

const Message = ({ currentReceiverName, receiver, text, time }) => {
  const isUser = receiver === currentReceiverName;

  return (
    <div className={`message mb-4 ${isUser ? 'text-right' : ''}`}>
      <div
        className={`inline-block px-4 py-2 rounded-lg break-words max-w-[80%] ${
          isUser ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        {text}
      </div>
      <p className="text-xs text-gray-500 mt-1">{formatDate(time)}</p>
    </div>
  );
};

export default Message;
