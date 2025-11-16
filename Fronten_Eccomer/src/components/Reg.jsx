import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate, Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {toast} from 'react-hot-toast'

const Reg = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(true)

    const [form, setForm] = useState({ fname: '', email: '', pass: '' })

    async function handleForm(e) {
        e.preventDefault()
        try {
            const response = await fetch(`/api/regdata`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            })
            const result = await response.json()
            if(response.ok){
                toast.success(result.message)
                navigate("/login")
            }else{
                toast.error(result.message)
            }
        } catch (error) {
            toast.error(error)
        }
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-45 backdrop-blur-sm flex justify-center items-center '>
            <div className='bg-white w-full max-w-md p-6 rounded-2xl shadow-sm relative'>
                <button onClick={() => { navigate("/") }} className='text-xl absolute top-3 right-3 hover:text-red-600'>
                    <IoIosCloseCircle />
                </button>
                <h2 className='text-center text-2xl font-bold text-purple-700 mb-4'>Your Ragester... 🏠</h2>

                {/* Form Start */}
                <form action="" onSubmit={handleForm}>
                    <label htmlFor="" className='block mb-2 text-gray-700'>Your Full Name</label>
                    <input type="text" placeholder='Enter your Name..' className='w-full border border-gray-500 px-4 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:text-purple-600' name="fname" id=""
                        value={form.fname}
                        onChange={handleChange}
                    />
                    <label htmlFor="" className='block mb-2 text-gray-700'>Email</label>
                    <input type="text" placeholder='Enter your email..' className='w-full border border-gray-500 px-4 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:text-purple-600' name="email" id="" value={form.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="" className='block mb-2 text-gray-700'>Password</label>
                    <div className='relative mb-4'>
                        <input type={showPassword ? "password" : "text"} placeholder='Enter password..' className='w-full border border-gray-500 px-4 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:text-purple-600' name="pass" id="" value={form.pass}
                            onChange={handleChange}
                        />
                        <button type='button' onClick={() => (setShowPassword(!showPassword))} className='text-xl absolute top-3 right-3 hover:text-green-700'>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <button className='w-full py-2 bg-purple-500 hover:bg-purple-800 text-white font-bold rounded-xl mb-5'>Ragister</button>

                </form>

                {/* Form end */}
                <p className='text-sm text-center text-gray-700'>Already have an account!
                    <Link to={"/login"} className='text-green-600 hover:underline'> Login</Link>
                </p>
            </div>
        </div>
    )
}

export default Reg