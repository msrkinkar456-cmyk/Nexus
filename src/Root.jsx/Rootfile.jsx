import React from 'react'
import Nav from "../components/Nav";
import Footer from "./../Pages/Footer";
import Feature from "./../Pages/Feature";
import Hero from "./../Pages/Hero";
import Capabilities from "./../Pages/Capabilities";

const Rootfile = () => {
  return (
    <>
    <div className ='flex w-full items-center flex-col bg-black min-h-screen text-white'>
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
