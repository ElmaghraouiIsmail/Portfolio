import React from 'react'
        
const Navbar = () => {
  return (                                                      
    <div className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex md:flex-row flex-col justify-between items-center'>
        <div className='text-2xl font-bold'>Smail</div>
        <div className='space-x-6 '>
            <a href="#Home" className='hover:text-gray-400'>Home</a>
            <a href="#About"  className='hover:text-gray-400'>About me</a>
            <a href="#Service"  className='hover:text-gray-400'>Service</a>
            <a href="#Project"  className='hover:text-gray-400'>Projects</a>
            <a href="#Cantact"  className='hover:text-gray-400'>Cantact</a>
        </div>
        <div className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden  md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect me</div>
      </div>
    </div>
  )
}

export default Navbar