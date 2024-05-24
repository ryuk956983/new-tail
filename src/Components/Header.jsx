import React from 'react'
import logo from "../images/Logo.svg"
import { FaBars } from "react-icons/fa6"

const Header = () => {
    return (
        <>
            <div className="header-container ">
                <nav className="flex h-10 justify-between items-center">
                    <div className='flex gap-x-4 items-center w-30'><img src={logo} alt="" />
                        <button className='text-white bg-gradient-to-r from-yellow-500 to-red-500 rounded-full px-1.5 py-0.5 '>Hoster is hiring</button>
                    </div>

                    <div className='hidden lg:block'>
                        <ul className='flex gap-x-7 text-slate-500'>
                            <li>Plans</li>
                            <li>Find Domain</li>
                            <li>Why hoster</li>
                        </ul>
                    </div>
                    <div className='hidden lg:block'>
                        <a href="#" className='text-slate-500'>Sign in</a>
                        <button className='bg-blue-500 p-2 text-white rounded ml-6'>Join Wishlist</button>
                    </div>
                    <div className='lg:hidden'>
                        <FaBars />
                    </div>

                </nav>
            </div>
        </>
    )
}

export default Header