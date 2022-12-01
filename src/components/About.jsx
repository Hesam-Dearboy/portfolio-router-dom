import React from 'react'
import { ImPointRight } from "react-icons/im";
const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-purple-900 to-black via-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-orange-500'> About </p>
            </div>
            <p className=' text-3xl mt-5 '>
                Hi , I'm  <span className=' text-orange-500'>Hesam Azizpour</span>  from <span className=' text-orange-500'>Rasht, Iran.</span> 
            </p>
            <p className="text-3xl  mt-0">
              I'm a student in Computer Engineering in Azad University of Rasht
            </p>
            <br />
            <p className='text-3xl mt-7'>Apart from coding, some other activities that I love to do!</p>
            <ul className=' mt-7 text-2xl '>
              <li> <ImPointRight className=' inline mr-2'/> Playing video games</li>
              <li> <ImPointRight className=' inline mr-2'/> Create Youtube video</li>
            </ul>
              <br />
              <p className=' about-quote flex flex-col justify-center mt-9 text-3xl text-center'>"Everything you can imagine is real." </p>
              <footer className=' about-quote text-center'>– Pablo Picasso.</footer>
        </div>
    </div>
  )
}

export default About