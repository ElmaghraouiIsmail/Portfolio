import React from 'react'
import saidiaimage from '../assets/saidiaimage.jpeg'
const Hero = () => {
  return (<>
    <div className='bg-black text-white text-center py-16' id='Home'>
        <img src={saidiaimage} alt="image en marin" className='mx-auto mb-8 h-48 w-48 object-cover rounded-full trasform
        transition-transform duration-300 hover:scale-105 '/>
        <h1 className='text-4xl font-bold'>
            Im {" "} 
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 '>elmahraoui ismail </span>
            ,Full-Stack Developper
        </h1 >
       <p className='text-gray-300 mt-4 text-lg '> I specialize in building modern and responsive web and mobile applications</p>
    <div className='space-x-4 mt-8'>
        <a
  href="#Cantact"
  className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transform transition-transform duration-300"
>
  Contact with me
</a>
        <a
  href="/Ismail_Elmahraoui_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full hover:scale-105 transform transition-transform duration-300"
>
  Download CV
</a>
    </div>
    </div>
    </>
  )
}

export default Hero