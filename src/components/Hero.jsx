import React from 'react'
import marin from '../assets/marin_image.jpg';
const Hero = () => {
  return (<>
    <div className='bg-black text-white text-center py-16' id='Home'>
        <img src={marin} alt="image en marin" className='mx-auto mb-8 h-48 w-48 object-cover rounded-full trasform
        transition-transform duration-300 hover:scale-105 '/>
        <h1 className='text-4xl font-bold'>
            Im {" "} 
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 '>elmahraoui ismail </span>
            ,Full-Stack Developper
        </h1 >
       <p className='text-gray-300 mt-4 text-lg '> I specialize in building modern and responsive web applications</p>
    <div className='space-x-4 mt-8'>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Cantact with me</button>
        <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline
                           transform transition:transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
    </div>
    </div>
    </>
  )
}

export default Hero