import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-12'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
       
         <div className='flex md:flex-row flex-col justify-between mt-8'>
            <p className='text-gray-600 hover:text-white'>
                &copy; {new Date().getFullYear()} Smail .all rights reserved.
            </p>
            <div className='flex space-x-4'>
                <a href="" className='text-gray-400 hover:text-white'>
                    <FaFacebook/>
                </a>
                <a href="" className='text-gray-400 hover:text-white'>
                    <FaLinkedin/>
                </a>
                <a href="" className='text-gray-400 hover:text-white'>
                    <FaTwitter/>
                </a>
                <a href="" className='text-gray-400 hover:text-white'>
                    <FaGithub/>
                </a>
                
            </div>
            <div className='flex space-x-4 '>  

                    <a href="" className='text-gray-400 hover:text-white'
                    >Privacy</a>
                    <a href="" className='text-gray-400 hover:text-white'
                    >terms of Services</a>
            </div>
         </div>
        </div>
    </footer>
  )
}

export default Footer