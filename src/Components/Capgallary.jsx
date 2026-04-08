import React from 'react'

const Capgallary = ({imgLink, title, details}) => {
  return (
     <div className='flex flex-col gap-4 rounded-[10px] border border-[#FFFFFF0A] bg-[#0F14206 p-4 sm:p-6 md:p-6 lg:p-8'>
            <div className='w-16 rounded-lg flex items-center justify-center bg-[#7C3AED33]/40 aspect-square'>
                <img src={imgLink} alt={title} />
            </div>
            <h4 className='text-[24px]  font-semibold'>{title}</h4>
            <p>{details}</p>
        </div>
  )
}

export default Capgallary