import Background from "@/assets/Background.png";
import ChatButton from "@/components/ChatButton";
import React from "react";

const ScrollableCanvas = ({
  setChatBoxToggle = () => {},
  setCurrentReceiverName = () => {},
}) => {
  return (
    <div
      className={`w-[128.015rem] h-[66.5rem] overflow-scroll border border-gray-300`}
    >
      <div className="relative w-[195.4rem] h-[133rem]">
        <img src={Background} alt="Scrollable" className="w-full h-full" />
        <ChatButton
          name={"Alyssa"}
          onClick={() => {
            setCurrentReceiverName("Alyssa");
            setChatBoxToggle(true);
          }}
          top={"53.7rem"}
          left={"50.35rem"}
          // top={"67.1rem"}
          // left={"66.15rem"}
        />
        <ChatButton
          name={"Lillian"}
          onClick={() => {
            setCurrentReceiverName("Lillian");
            setChatBoxToggle(true);
          }}
          top={"55.7rem"}
          left={"139.35rem"}
        />
      </div>
    </div>
  );
};

export default ScrollableCanvas;
