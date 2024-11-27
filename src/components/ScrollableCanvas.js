import Background from "@/assets/Background.png";
import ChatButton from "@/components/ChatButton";
import React, { useEffect, useRef } from "react";

const ScrollableCanvas = ({
  setChatBoxToggle = () => {},
  setCurrentReceiverName = () => {},
}) => {

  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.scrollIntoView({ behavior: 'instant', block: 'center' });
    }
  }, [imageRef])

  return (
    <div
      className={`w-[128.015rem] h-[66.5rem] overflow-scroll border border-gray-300`}
    >
      <div className="relative w-[155.4rem] h-[110rem]">
        <img src={Background} ref={imageRef} alt="Scrollable" className="w-full h-full" />
        <ChatButton
          onClick={() => {
            setCurrentReceiverName("Alyssa");
            setChatBoxToggle(true);
          }}
          top={"44.35rem"}
          left={"40.1rem"}
        />
        <ChatButton
          onClick={() => {
            setCurrentReceiverName("Lillian");
            setChatBoxToggle(true);
          }}
          top={"46.1rem"}
          left={"110.45rem"}
        />
      </div>
    </div>
  );
};

export default ScrollableCanvas;
