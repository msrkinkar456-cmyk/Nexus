import React from 'react'

import Footer from "../Pages/Footer";
import Feature from "../Pages/Feature";
import Hero from "../Pages/Hero";
import Capabilities from "../Pages/Capabilities";
import Nav from "../Components/Nav";

const Rootfile = () => {
  return (
    <>
    <div className ='flex w-full items-center flex-col bg-black min-h-full text-white'>
    <Nav/>
    <Hero/>
    <Feature/>
    <Capabilities/>
    <Footer/>
    </div>
    </>
  )
}

export default Rootfile