import React from 'react'
import checkmark from "../images/Checkmark.svg"
import blue from "../images/Blue-Shape.svg"
import pink from "../images/Pink-Shape.svg"
import purple from "../images/Purple-Shape.svg"
import hero from "../images/Hero-Model.png"

const Body = () => {
    return (
        <>
            <div className="flex justify-around items-center flex-col-reverse lg:flex-row flex-col gap-y-14 ">
                <div className='flex flex-col gap-y-4 flex-1 max-w-[500px] '>
                    <div>
                        <h1 className='text-bold text-5xl font-bold leading-normal'>Host your website in less than 5 minutes</h1>
                        <p>With Hoster, get your website up and running in no less than 5 minutes with the most competitve pricig packages available online.</p>
                    </div>
                    <div className="flex flex-col lg:flex-row md:flex-row gap-4">
                        <input type="text" placeholder="Enter Email address.." className='px-4  py-3 placeholder:text-black' />
                        <button className='bg-blue-500 p-2 text-white rounded '>Waitlist</button>

                    </div>
                    <div className='flex gap-x-2'>
                        <img src={checkmark} alt="" />
                        <p>No spam, ever, Unsubscribe anytime.</p>
                    </div>
                </div>
                <div className='flex'>
                    <img src={blue} alt="" className=' h-72 -rotate-45' />
                    <img src={pink} alt="" className='absolute h-72 -rotate-[30deg]' />
                    <img src={purple} alt="" className='absolute h-72 -rotate-[15deg]' />
                    <img src={hero} alt="" className='absolute h-72' />
                </div>
            </div>
        </>
    )
}

export default Body