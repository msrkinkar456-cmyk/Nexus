import React from "react";

const Hero = () => {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center">
      <div className="mt-2 max-w-md mx-auto flex  items-center gap-2 border bg-[#0E1B26]/50 border-white/10 rounded-2xl px-4 py-2 w-fit">
      <img src="Star.png" alt="star" />
      <span className="font-semibold whitespace-nowrap">
        Award-winning Design Agency
      </span>
      </div>
      {/* details section */}
      <div className="mt-8 max-w-3xl mx-auto text-center text-8xl leading-26 tracking-tight text-[#E6F0FF] font-bold">
        <p>We Build Iconic Brands</p>
      </div>
      <div className="max-w-2xl mx-auto text-center text-[#8A98A6] text-lg py-2">
         <p>A creative agency designing digital experiences for tomorrow. We blend high-end aesthetics with powerful strategy to craft legendary digital products.</p>
      </div>
      {/* Button section */}
      <div className="mt-8 text-base flex flex-wrap justify-center items-center gap-4">
        <div className="flex justify-center items-center border bg-[#7C3AED] rounded-2xl px-8 py-4 gap-2">
          <a href="">View Project</a>
            <div>
                <img src="Arrow.png" alt="arrow" />
            </div>
        </div>
        <div className="flex  border border-white/10 bg-black/40 rounded-2xl px-8 py-4 gap-2">
          <a href="">Our Expertise</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
