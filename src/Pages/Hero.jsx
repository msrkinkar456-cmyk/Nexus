import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start px-4 md:px-8 lg:px-16 pt-0">
      <div className="mt-2 sm:mt-2 md:mt-3 max-w-md mx-auto flex items-center gap-1 sm:gap-2 md:gap-3 border border-white/10 bg-[#0E1B26]/50 rounded-2xl px-3 sm:px-4 md:px-5 py-1 sm:py-2 md:py-3 w-fit text-xs sm:text-sm md:text-base">
      <img src="/Star.png" alt="star" />
      <span className="font-semibold whitespace-nowrap">
        Award-winning Design Agency
      </span>
      </div>
      {/* details section */}
      <div className="mt-4 sm:mt-6 max-w-3xl mx-auto text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-snug tracking-tight text-[#E6F0FF] font-bold">
        <p>We Build Iconic Brands</p>
      </div>
      <div className="mt-2 sm:mt-3 max-w-2xl mx-auto text-center text-base sm:text-lg md:text-xl text-[#8A98A6]">
         <p>A creative agency designing digital experiences for tomorrow. We blend high-end aesthetics with powerful strategy to craft legendary digital products.</p>
      </div>
      {/* Button section */}
      <div className="mt-4 sm:mt-6 flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6">
        <div className="flex justify-center items-center border bg-[#7C3AED] rounded-2xl px-6 sm:px-8 py-2 sm:py-3 gap-2">
          <a href="">View Project</a>
            <div>
                <img src="/Arrow.png" alt="arrow" />
            </div>
        </div>
        <div className="flex justify-center items-center border border-white/10 bg-black/40 rounded-2xl px-6 sm:px-8 py-2 sm:py-3 gap-2">
          <a href="">Our Expertise</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
