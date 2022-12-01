import React from 'react'
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
const Footer = () => {
    let date = new Date()
    let year = date.getFullYear()
  return (
    
    <footer>
        <div className=' footer--bg text-white py-3  flex flex-col justify-center items-center w-full  backdrop-blur'>
            <h3 className=' text-center text-2xl '>Designed and Developed by Hesam Azizpour</h3>
            <h3 className=' flex text-xl'>Copyright © {year} 
                <h3 className=' text-xl ml-3 mt-1 font-signature text-orange-500'>DearBoy</h3> 
            </h3> 

            <ul className='z-10 gap-7 flex w-full justify-center mt-4 mb-3 text-2xl'>
                <li><a href=""><AiFillGithub/></a></li>
                <li><a href=""><AiOutlineTwitter/></a></li>
                <li><a href=""><AiFillInstagram/></a></li>
                <li></li>
            </ul>

        </div>
    </footer>
  )
}

export default Footer