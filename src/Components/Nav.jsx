import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div className="w-full relative z-1000 mt-4 md:mt-6 lg:mt-10 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto  bg-[#0F1420]/40 px-4 md:px-6 lg:px-8 py-3 md:py-4  border border-white/10 rounded-2xl flex  items-center md:items-center justify-between gap-4 md:gap-0 text-white">
          {/* logo section */}
          <div className="flex  items-center font-semibold md:font-bold gap-2 md:gap-3 ">
            <Link to={"/"}>{" "} <img className="h-8 md:h-8 lg:h-10 w-auto" src="Background.png" alt=""/>{" "}</Link>
            <h1>NEXUS</h1>
          </div>
          {/* menu section */}
          <nav>
            <ul className="sm:flex hidden  items-center gap-4 md:gap-6 lg:gap-8">
              <NavLink to={"/feature"}>
                <li className="cursor-pointer">Work</li>
              </NavLink>
              <NavLink to={"/capabilities"}>
                {" "}
                <li className="cursor-pointer">Studio</li>{" "}
              </NavLink>
              <NavLink to={"/"}>
                {" "}
                <li className="cursor-pointer">Services</li>{" "}
              </NavLink>
              <NavLink to={"/"}>
                {" "}
                <li className="cursor-pointer">Insights</li>{" "}
              </NavLink>
            </ul>
          </nav>
          {/* chatbox section */}
          <div className="sm:flex hidden items-center justify-center cursor-pointer border border-white/10 rounded-2xl px-4  md:px-7 py-2 md:py-3 text-sm md:text-base lg:text-lg">
            <h1>Let,s Talk </h1>
          </div>
          <div
            onClick={() => setNavOpen((prev) => !prev)}
            className="sm:hidden block w-fit"
          >
            {!navOpen ? <IoMdMenu size={24} /> : <RxCross2 size={24} />}
          </div>
        </div>
      </div>

      <div
        className={`fixed z-999 inset-0 bg-black  transition-transform duration-300 sm:hidden ${navOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex sm:hidden h-full items-center justify-center flex-col gap-y-6 text-3xl">
          <NavLink to={"/feature"}>
            <li className="cursor-pointer">Work</li>
          </NavLink>
          <NavLink to={"/capabilities"}>
            {" "}
            <li className="cursor-pointer">Studio</li>{" "}
          </NavLink>
          <NavLink to={"/"}>
            {" "}
            <li className="cursor-pointer">Services</li>{" "}
          </NavLink>
          <NavLink to={"/"}>
            {" "}
            <li className="cursor-pointer">Insights</li>{" "}
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
