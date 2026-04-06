import React from 'react'

const Capgallary = ({imgLink, title, details}) => {
  return (
     <div className='rounded-[10px]  border-[#FFFFFF0A] bg-[#0F142066]/40 flex flex-col gap-y-4 border p-3.5 sm:p-6'>
            <div className='w-16 rounded-lg flex items-center justify-center bg-[#7C3AED33]/40 aspect-square'>
                <img src={imgLink} alt={title} />
            </div>
            <h4 className='text-[24px]  font-semibold'>{title}</h4>
            <p>{details}</p>
        </div>
  )
}

export default Capgallary