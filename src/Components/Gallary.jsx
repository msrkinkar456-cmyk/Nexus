import React from "react";

const Gallary = ({ text1, text2, imgLink }) => {
  return (
    <div className="border-px rounded-md shadow-[0_2px_6px_rgba(0,0,0,0.25)] w-full border-[#FFFFFF0A]">
      <div className="relative">
        <img src={imgLink} className="max-w-[384px] rounded-md w-full" alt="" />

        <div className="absolute px-5 bottom-3 flex items-center justify-between w-full">
          <div>
            <p className="font-semibold text-[20px]">{text1}</p>
            <p className="text-[14px] text-[#8A98A6]">{text2}</p>
          </div>

          <div className="w-12 flex items-center justify-center rounded-3xl aspect-square bg-[#7C3AED]">
            <img src="/Toparrow.png" alt="top-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
