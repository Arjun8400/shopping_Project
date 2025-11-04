import React from 'react'
import { FaBagShopping, FaGamepad, FaApple, FaLaptop, FaMobile } from 'react-icons/fa6'
import { CiCoffeeCup} from "react-icons/ci"
import { IoHome} from "react-icons/io5"
import { GiNailedHead } from "react-icons/gi"

const Category = ({onselectCat}) => {
    const category = [
        { name: "All", icon: <FaBagShopping /> },
        { name: "Cafe", icon: <CiCoffeeCup /> },
        { name: "Home", icon: <IoHome /> },
        { name: "Toys", icon: <FaGamepad /> },
        { name: "Freash", icon: <FaApple /> },
        { name: "Electronics", icon: <FaLaptop /> },
        { name: "Mobile", icon: <FaMobile /> },
        { name: "Beauty", icon: <GiNailedHead /> }
    ]
    return (<div className='w-full'>
        <div className='max-w-7xl mx-auto px-4'>
            <div className='flex sm:justify-center overflow-x-auto'>
                {
                    category.map((cat, index) => (
                        <div 
                        onClick={()=>{onselectCat(cat.name)}} 
                        key={index} 
                        className='flex flex-col items-center min-w-[80px] text-sm text-gray-800 hover:text-purple-700 hover:cursor-pointer'>
                            <div className='text-2xl mb-1'>{cat.icon}</div>
                            <div className='text-center'>{cat.name}</div>

                        </div>
                    ))
                }

            </div>

        </div>
    </div>        
    )
}

export default Category