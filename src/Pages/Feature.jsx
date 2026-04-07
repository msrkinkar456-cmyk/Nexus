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
    <div className='max-w-300 gap-y-16 mx-auto py-[5%] px-2 flex flex-col'>

      {/* top text */}
      <div className=' text-center flex flex-col gap-y-2'>
        <h2 className='text-start text-4xl text-[48px] font-bold'>Featured Work</h2>
        <p className=' text-start  max-w-125 text-sm text-[18px] text-[#8A98A6] w-full'>
          Explore our latest collection of premium digital products,
          immersive 3D experiences, and iconic brand identities.
        </p>
      </div>

      {/* gallery */}
      <div className='justify-center gap-6 grid grid-cols-3  p-2'> 
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
  )
}

export default Feature