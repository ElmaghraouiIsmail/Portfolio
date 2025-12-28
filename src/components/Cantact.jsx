import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Cantact = () => {
  return (
     <div className='bg-black text-white text-center py-20' id='Cantact'>
            <div className='container mx-auto  px-8 md:px-16 lg:px-24 '>
                    <h2 className='text-4xl font-bold text-center  mb-12'>Cantact Me</h2>
                    <div className='flex flex-col md:flex-row items-center md:space-x-12 '>
                    
                    <div className='flex-1'>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Lets Talk</h3>
                    <p>hello im smail elmaghraoui and im Software ingenieur</p>
                   <div className='mb-8 mt-6'>
                     <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                     <a href="youreemail@gmail.com" >
                     elmagrhaoui@gmail.com
                     </a>
                   </div>
                   <div className='mb-8 '>
                     <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                     <span>+212 682951422</span>
                   </div>
                   <div className='mb-8 '>
                     <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                     <span>City, collorado, reo dejaniero</span>
                   </div>
                </div>
                <div className='flex-1 w-full'>
                  <form>
                    <div>
                        <label htmlFor="name" className='block mb-2'>youre name</label>
                        <input type="text" className='w-full p-2 bg-gray-800 rounded border border:gray-600 focus:outline-none
                                                focus:border-green-400'
                          placeholder='Enter youre Name'/>
                    </div>
                    <div>
                        <label htmlFor="email" className='block mb-2'>youre email</label>
                        <input type="text" className='w-full p-2 bg-gray-800 rounded border border:gray-600 focus:outline-none
                                                focus:border-green-400'
                          placeholder='Enter youre Email'/>
                    </div>
                    <div>
                  <label htmlFor="message" className='block mb-2'>youre message</label>
                        <textarea type="text" className='w-full p-2 bg-gray-800 rounded border border:gray-600 focus:outline-none
                                                focus:border-green-400'
                          rows="5"
                          placeholder='Enter youre Message'/>
                    </div>
                    <div className='bg-gradient-to-r from-green-400 to-blue-500 mt-4 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full'>Send</div>
                  </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cantact