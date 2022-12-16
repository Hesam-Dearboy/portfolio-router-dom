import React from 'react'
import memoji from '../assets/memoji.mp4'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-router-dom'
import TypeWriterEffect from 'react-typewriter-effect'

const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-purple-900'>
        
        
        <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'> 
            <div className=' flex flex-col justify-center h-full  '>
                <h2 className=' text-4xl sm:ml-4 sm:text-7xl font-bold text-white static-txt  '> Hi , I'm Hesam Azizpour </h2>
                <p className='text-4xl sm:text-7xl font-bold text-orange-500   font-signature mt-[-20px] hidden md:block '>Dear Boy</p>
                <div className='  my-5 text-gray-500 text-2xl '>
                        <TypeWriterEffect
                        
                        textStyle={{
                          
                          fontWeight: 600,
                          fontSize: '1.5em',
                        }}
                        startDelay={2000}
                        cursorColor="#3F3D56"
                        multiText={[
                          
                          'A Designer based on Iran.',
                          'A Front-End Developer based on Iran.',
                          'A Back-End Developer based on Iran.',
                          'A Programmer based on Iran.'
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={30}
                        loop={true}
                        />
                
                    <Link
                      to="/portfolio"
                      className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-600 to-orange-500 cursor-pointer"
                    >
                      Portfolio
                      <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                      </span>
                    </Link>
                  </div>
            </div>
            <div className=''>
                <video autoPlay muted  loop playsInline className=' rounded-full  ' src= {memoji} typeof='video/mp4'/>
            </div>
        </div>
    </div>
  )
}

export default Home