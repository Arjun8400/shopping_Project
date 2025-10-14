import React from 'react'

const Quary = () => {
  return (
    <div className='max-w-7xl mt-20 p-6 mx-auto bg-gray-200 rounded shadow-lg'>
        <h2 className='text-2xl font-bold mb-4 text-center text-purple-600'>Your Quary From 📃</h2>
        <form>
          <label className='block text-gray-700 font-medium ' htmlFor="">Your Name</label>
          <input type="text" name='' id='' placeholder='Enter your Name ...' className='w-full px-4 py-2 border bg-white border-gray-400  focus:outline-none focus:ring-2 focus:ring-purple-500 rounded' />
          <label className='block text-gray-700 font-medium ' htmlFor="">Your Email</label>
          <input type="email" name="" id="" placeholder='Enter your Email ...' className='w-full px-4 py-2 bg-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded' />
          <label className='block text-gray-700 font-medium ' htmlFor="">Your Quary</label>
          <textarea name="" id="" placeholder='Enter your Quary ...' className='w-full px-4 py-2 border bg-white border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded'></textarea>
          <button type="submit" className='w-full bg-purple-600 hover:bg-purple-800 text-white py-1 rounded-sm mt-3 transition'>Send Quary</button>
        </form>
    </div>
  )
}

export default Quary