import React from 'react'
import Capgallary from '../Components/Capgallary'

const capCard = [
  {
    id: 1,
    imgLink: '/Capcard/Cap 1.png',
    title: 'Digital Products',
    details: 'End-to-end product design and engineering. We build high-performance web and mobile applications with impeccable UI/UX'
  },
  {
    id: 2,
    imgLink: '/Capcard/Cap 2.png',
    title: '3D & Motion',
    details: 'Cinematic 3D rendering and immersive animation that elevate your brand narrative and captivate your audience.'
  },
  {
    id: 3,
    imgLink: '/Capcard/Cap 3.png',
    title: 'Brand Strategy',
    details: 'Data-driven strategy to position your brand as a market leader. We create cohesive identities that scale.'
  }
]

const Capabilities = () => {
  return (
    <div className='max-w-300 mx-auto justify-center items-center '>

      <div className='mt-40 font-bold text-center text-[48px] leading-18 text-[#E6F0FF]'>
        <h1>Our Capabilities</h1>
      </div>

      <p className='py-2 max-w-125 mx-auto text-center text-[#8A98A6]'>
        We are a multi-disciplinary studio leveraging future-ready technologies to craft industry-leading platforms.
      </p>

      {/* card section */}
      <section className='py-[5%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
        {
          capCard.map(item => (
            <Capgallary
              key={item.id}
              imgLink={item.imgLink}
              title={item.title}
              details={item.details}
            />
          ))
        }
      </section>

    </div>
  )
}

export default Capabilities