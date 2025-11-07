import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {FaTimesCircle} from 'react-icons/fa'

const SearchData = ({onClose}) => {

    const [search, setSearch] = useState("")

    //Debounce

    useEffect(()=>{
        const delayDebounce = setTimeout(()=>{
            if(search.trim()){
                fetch(`/api/search?q=${search}`)
            }
        },500)
        return ()=> clearTimeout(delayDebounce)
    }, [search])

  return (
    <div className='fixed inset-0 bg-white z-[999] p-4 overflow-y-auto '>
        <div className='mb-4 flex justify-between items-center' >
            <input type="text" name="" id=""
            placeholder='Search here....'
            autoFocus
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
            className='flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-none'
            />
            <button className='ml-3 text-gray-700 hover:text-red-600 text-xl'
            onClick={()=>{onClose(false)}}
            >
                <FaTimesCircle/>
            </button>
        </div>
    </div>
  )
}

export default SearchData