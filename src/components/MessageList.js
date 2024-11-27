import React from 'react';
import Message from '@/components/Message';

const MessageList = ({ messages, currentReceiverName }) => {
  return (
    <div className="message-list flex-1 overflow-y-auto flex flex-col-reverse px-4 py-2">
      <div>
        {messages.map((msg, index) => (
          <Message currentReceiverName={currentReceiverName} key={msg.id || index} sender={msg.senderName} receiver={msg.receiverName} text={msg.text} time={msg.time} />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
