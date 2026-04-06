import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-360 mx-auto mt-4 flex  gap-93 items-center'>
      <div className='flex items-center justify-center font-bold text-[#E6F0FF] gap-2 max-w-300 '>
        <img src="Background.png" alt="bottom" />
        <div>
          NEXUS
        </div>
      </div>
      <div className='text-[#8A98A6] '>
          <p>© 2025 Nexus Creative Agency. All rights reserved</p>
      </div>
      <div>
        <ul className='flex font-semibold gap-2'>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Dribble</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Footer