import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-360 mx-auto  w-full flex flex-col px-4 py-10 justify-between sm:flex-row  items-center sm:items-center sm:justify-between gap-6 sm:gap-10 md:gap-16'>
      <div className='flex items-center gap-2 '>
      <img src="/Background.png" className='h-[24px] w-[24px]' alt="bottom" />
          NEXUS
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