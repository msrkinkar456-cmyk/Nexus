import React from 'react'
import Gallary from '../Components/Gallary'

const imgData = [
  {
    id: 1,
    text1: 'Lumia Web3',
    text2: 'Digital product & 3D',
    imgLink: '/FeatureCard/card 1.png'
  },
  {
    id: 2,
    text1: 'Vanguard',
    text2: 'Mobile Aplication',
    imgLink: '/FeatureCard/card 2.png'
  },
  {
    id: 3,
    text1: 'Kroma Studio',
    text2: 'E-commerce',
    imgLink: '/FeatureCard/card 3.png'
  },
  {
    id: 4,
    text1: 'Aether 05',
    text2: 'Interface Design',
    imgLink: '/FeatureCard/card 4.png'
  },
  {
    id: 5,
    text1: 'Nova Synth',
    text2: 'Interface Design',
    imgLink: '/FeatureCard/card 5.png'
  },
  {
    id: 6,
    text1: 'Chronos Wear',
    text2: 'Interface Design',
    imgLink: '/FeatureCard/card 6.png'
  },
]

const Feature = () => {
  return (
    <div className='flex flex-col max-w-300 py-[5%] px-2  sm:items-start items-center'>

      {/* top text */}
      <div className='sm:text-start text-center  grid grid-cols-1 gap-y-1'>
        <h2 className='max-w-300 text-4xl sm:text-[48px] font-bold '>Featured Work</h2>
        <p className='justify-start max-w-md sm:max-w-lg leading-6.75 text-[#8A98A6]'>
          Explore our latest collection of premium digital products,
          immersive 3D experiences, and iconic brand identities.
        </p>
      </div>

      {/* gallery */}
      <div className='grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-5 my-[5%]'> 
        {
          imgData.map(item => (
            <Gallary
              key={item.id}
              text1={item.text1}
              text2={item.text2}
              imgLink={item.imgLink}
            />
          ))
        }
      </div>

    </div>
  );
};

export default Feature