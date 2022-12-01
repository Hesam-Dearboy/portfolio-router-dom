import React from 'react'
import {FaGithub  } from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'



const SocialLinks = () => {
  return (
    <div className=' hidden lg:flex felx-col top-[35%] left-0 fixed'>
        <ul> 

            <li className='felx justify-between item-center h-14 w-40  px-4 bg-orange-500 ml-[-100px] hover:rounded-md duration-300  hover:ml-[-10px] rounded-tr-md'>  <a className='flex justify-between items-center pt-3 font-semibold ' href=""><>Instagram <AiFillInstagram size={30}/> </></a>  </li>

            <li className='felx justify-between item-center h-14 w-40  px-4 bg-orange-500 ml-[-100px] hover:rounded-md duration-300  hover:ml-[-10px]'>  <a className='flex justify-between items-center pt-3 font-semibold ' href=""><>GitHub <FaGithub size={30}/> </></a>  </li>

            <li className='felx justify-between item-center h-14 w-40  px-4 bg-orange-500 ml-[-100px] hover:rounded-md duration-300  hover:ml-[-10px]'>  <a className='flex justify-between items-center pt-3 font-semibold ' href=" mailto:hesam.dearboy@gmail.com"><>Email <HiOutlineMail size={30}/> </></a>  </li>

            <li className='felx justify-between item-center h-14 w-40  px-4 bg-orange-500 ml-[-100px] hover:rounded-md duration-300  hover:ml-[-10px] rounded-br-md'>  <a className='flex justify-between items-center pt-3 font-semibold  ' href=""><>Resume <BsFillPersonLinesFill size={30}/> </></a>  </li>


        </ul>
    </div>
  )
}

export default SocialLinks