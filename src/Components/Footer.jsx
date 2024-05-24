import React from 'react'
import pic from "../images/Help-Avatar.svg"

const Footer = () => {
  return (
    <div className='flex justify-between flex-col md:flex-row lg:flex-row  gap-10'>
      <div >
        <ul className='flex gap-x-5 text-slate-500'>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
      <div className='flex gap-x-4 items-center'>

        <img src={pic} alt="" />
        <div>
          <p> Have any qustions?</p>
          <p><b>Talk to a specialist</b></p>
        </div>

      </div>
    </div>
  )
}

export default Footer