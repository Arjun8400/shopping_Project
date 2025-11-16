import React from 'react'
import { useState } from 'react'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

const Quary = () => {
  const navigate = useNavigate()

  const [quary, setQuary] = useState({ userName: "", userEmail: "", userQuary: "" })

  async function handleForm(e) {
    try {
      e.preventDefault()
      const response = await fetch(`/api/userquary`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quary)
      })

      const record = await response.json()
      
      if(response.ok){
        toast.success(record.message)
        navigate("/")
      }else{
        toast.error(record.message)
      }
    } catch (error) {
      toast.error(error)
    }
  }

  function handleChange(e) {
    setQuary({ ...quary, [e.target.name]: e.target.value })
  }

  return (
    <div className='max-w-7xl mt-20 p-6 mx-auto bg-gray-200 rounded shadow-lg'>
      <h2 className='text-2xl font-bold mb-4 text-center text-purple-600'>Your Quary From 📃</h2>
      <form onSubmit={handleForm}>
        <label className='block text-gray-700 font-medium ' htmlFor="">Your Name</label>
        <input type="text"
          name='userName'
          value={quary.userName}
          onChange={handleChange}
          id='' placeholder='Enter your Name ...'
          className='w-full px-4 py-2 border bg-white border-gray-400  focus:outline-none focus:ring-2 focus:ring-purple-500 rounded' />

        <label className='block text-gray-700 font-medium ' htmlFor="">Your Email</label>
        <input type="email"
          name="userEmail"
          value={quary.userEmail}
          onChange={handleChange}
          id="" placeholder='Enter your Email ...'
          className='w-full px-4 py-2 bg-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded' />

        <label className='block text-gray-700 font-medium ' htmlFor="">Your Quary</label>
        <textarea name="userQuary"
          value={quary.userQuary}
          onChange={handleChange}
          id=""
          placeholder='Enter your Quary ...'
          className='w-full px-4 py-2 border bg-white border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded'></textarea>
        <button type="submit" className='w-full bg-purple-600 hover:bg-purple-800 text-white py-1 rounded-sm mt-3 transition'>Send Quary</button>
      </form>
    </div>
  )
}

export default Quary