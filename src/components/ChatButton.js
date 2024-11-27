import React from 'react';

const ChatButton = ({ onClick = () => {}, top, left }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
      }}
      className={`bg-transparent text-white w-[8.1rem] h-[2.5rem] rounded`}
    >
      <button className="w-full h-full" onClick={onClick} />
    </div>
  );
};

export default ChatButton;
