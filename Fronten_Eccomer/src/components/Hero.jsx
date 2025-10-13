import React from 'react'
import diwali from "../assets/dewali.webp"

const Hero = () => {
  return (
    <section className='bg-gradient-to-r from-purple-100 via-white to-white px-6 py-6 md:flex justify-between items-center max-w-7xl mx-auto mt-20 rounded-xl shadow-lg'>
        <div className='md:w-1/2 space-y-4' >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>Fast Delivary...🚀</h2>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro perferendis ipsa fugit optio, autem necessitatibus! Praesentium nisi est ab ad?</p>
            <button className='bg-purple-500 text-white hover:bg-purple-800 px-6 py-1 rounded-3xl mt-4'>Shop now</button>         
        </div>
        <div className='md:w-1/2 mt-6 md:mt-0'>
            <img src={diwali} alt="" className='w-full max-w-md mx-auto rounded-2xl' />
        </div>
    </section>
  )
}

export default Hero