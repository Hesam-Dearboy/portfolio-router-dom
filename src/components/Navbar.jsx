import React , {useState} from 'react'
import {FaBars , FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)


  return (
    <div className=' flex justify-between items-center w-full h-20 text-white fixed bg-transparent backdrop-blur-md	 px-4'>
        
        
        <div>
            <h1 className=' text-orange-400
             font-signature text-5xl ml-2 '>Dear Boy</h1>
        </div>


        <ul className=' hidden md:flex '>
            <li  className=' px-4 cursor-pointer capitalize text-orange-500 hover:scale-110 duration-200 hover:border-b-2 border-yellow-400'> <Link to='home' smooth duration={500}>Home</Link> </li>
            <li className=' px-4 cursor-pointer capitalize text-orange-500 hover:scale-110 duration-200 hover:border-b-2 border-yellow-400'> <Link to='about' smooth duration={500}>about</Link> </li>
            <li className=' px-4 cursor-pointer capitalize text-orange-500 hover:scale-110 duration-200 hover:border-b-2 border-yellow-400'> <Link to='portfolio' smooth duration={500}>Portfolio</Link> </li>
            <li className=' px-4 cursor-pointer capitalize text-orange-500 hover:scale-110 duration-200 hover:border-b-2 border-yellow-400'> <Link to='experience' smooth duration={500}>experience</Link> </li>
            <li className=' px-4 cursor-pointer capitalize text-orange-500 hover:scale-110 duration-200 hover:border-b-2 border-yellow-400'> <Link to='contact' smooth duration={500}>Contact</Link> </li>
             </ul>


            <div onClick={() => setNav(!nav)} className=' cursor-pointer pr-4 z-10 md:hidden'>
                {nav ?  <FaTimes size={30} className=" text-orange-400" /> :  <FaBars size={30} className=" text-orange-400"/>}
            </div>



         {nav &&(
              <div>
              <ul className=' flex flex-col  justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-purple-900 text-gray-500'>
                      <li className='  text-4xl py-8 cursor-pointer capitalize text-orange-500 hover:scale-110 duration-200'>   <Link
                                onClick={() => setNav(!nav)}
                                to='home'
                                smooth
                                duration={500}
                              >
                                Home
                              </Link>
                              </li>
                      <li className=' text-4xl py-8 cursor-pointer capitalize text-orange-500 hover:scale-110 duration-200'> <Link
                                onClick={() => setNav(!nav)}
                                to='about'
                                smooth
                                duration={500}
                              >
                                About
                              </Link> </li>
                      <li className=' text-4xl py-8 cursor-pointer capitalize text-orange-500 hover:scale-110 duration-200'> <Link
                                onClick={() => setNav(!nav)}
                                to='portfolio'
                                smooth
                                duration={500}
                              >
                                Portfolio
                              </Link> </li>
                      <li className=' text-4xl py-8 cursor-pointer capitalize text-orange-500 hover:scale-110 duration-200'> <Link
                                onClick={() => setNav(!nav)}
                                to='experience'
                                smooth
                                duration={500}
                              >
                                Experience
                              </Link> </li>
                      <li className='text-4xl py-8 cursor-pointer capitalize  text-orange-500 hover:scale-110 duration-200'> <Link
                                onClick={() => setNav(!nav)}
                                to='contact'
                                smooth
                                duration={500}
                              >
                                Contact
                              </Link> </li>
              </ul>
          </div>)}

                 
    </div>

  )
}

export default Navbar