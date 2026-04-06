import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Hero from './Pages/Hero';
import Feature from './Pages/Feature';
import Capabilities from './Pages/Capabilities';
import Footer from './Pages/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='flex flex-col bg-black min-h-screen text-white'>
        <Nav />

        {/* Use flex-grow to push footer down */}
        <main className='grow'>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/feature' element={<Feature />} />
            <Route path='/capabilities' element={<Capabilities />} />
            {/* Optional: 404 Route */}
            <Route path='*' element={<Hero/>}/> 
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;