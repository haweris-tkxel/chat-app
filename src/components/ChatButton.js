import React from 'react';

const ChatButton = ({ name, onClick = () => {}, top, left }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
      }}
      className={`bg-transparent text-white w-[10.25rem] h-[3.1rem] rounded`}
    >
      <button className="w-full h-full" onClick={onClick} />
    </div>
  );
};

export default ChatButton;
