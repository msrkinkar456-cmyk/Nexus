import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-7xl mx-auto  w-full mt-4 flex flex-col  justify-between sm:flex-row  items-center gap-6 sm:gap-10 md:gap-16'>
      <div className='flex flex-col sm:flex-row items-center justify-center font-bold text-[#E6F0FF] gap-1 sm:gap-2 md:gap-3 '>
        <img src="Background.png" alt="bottom" />
        <div>
          NEXUS
        </div>
      </div>
      <div className='text-[#8A98A6] '>
          <p>© 2025 Nexus Creative Agency. All rights reserved</p>
      </div>
      <div>
        <ul className='flex flex-col sm:flex-row font-semibold gap-1 sm:gap-2 md:gap-3'>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Dribble</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Footer