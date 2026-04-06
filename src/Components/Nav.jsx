import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="w-full h-full mt-6 ">
            <div className="max-w-6xl mx-auto  bg-[#0F1420]/40 px-8 py-4 lg:px-8 border border-white/10 rounded-2xl flex items-center justify-between text-white">
                {/* logo section */}
                <div className="flex items-center font-bold gap-2">
                <Link to={'/'}> <img className="h-8 w-auto" src="Background.png" alt="" /> </Link>
                <h1>NEXUS</h1>
                </div>
                {/* menu section */}
            <nav>
                <ul className="flex gap-8 items-center">
                   <NavLink to={'/feature'}><li className="cursor-pointer">Work</li></NavLink>
                   <NavLink to={'/capabilities'}> <li className="cursor-pointer">Studio</li> </NavLink>
                   <NavLink to={'/hero'}> <li className="cursor-pointer">Services</li> </NavLink>
                   <NavLink to={'/'}> <li className="cursor-pointer">Insights</li> </NavLink>
                </ul>
            </nav>
            {/* chatbox section */}
            <div className="flex items-center justify-center cursor-pointer border border-white/10 rounded-2xl px-7 py-3">
                 <h1>Let,s Talk </h1>
            </div>
            </div>
            
        </div>
    );
};

export default Nav;