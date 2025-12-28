import React from 'react'
import marin from '../assets/marin_image.jpg'
const About = () => {
  return (
    <div className='bg-black text-white text-center py-20' id='About'>
        <div className='container mx-auto  px-8 md:px-16 lg:px-24 '>
                <h2 className='text-4xl font-bold text-center  mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12 '>
                <img src={marin} alt="marin image" className='w-62 h-70 mb-8 rounded object-cover md:mb-0'/>
                <div className='flex-1'>
                <p className='text-lg mb-8'>je suis ismail elmaghraoui etudiant LENIAD de Berkane<br></br>
                   en premiere annee de cycle dingenieur ,dans la filierebr<br></br>
                   de genie informatique.
                </p>
                <div className='space-y-4'>
                    <div className='flex items-center'>
                      <label htmlFor="htmlandcss">HTML & CSS   :</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                              <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5  
                                              transform transition-transform duration-300 hover:scale-105  rounded-full w-10/12'>
                  
                              </div>
                         </div>
                    </div>
                    <div className='flex items-center'>
                      <label htmlFor="htmlandcss">React JS   :</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                              <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5  
                                           transform transition-transform duration-300 hover:scale-105  rounded-full w-9/12'>
                  
                              </div>
                         </div>
                    </div>
                    <div className='flex items-center'>
                      <label htmlFor="htmlandcss">Node JS    :</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                              <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5  
                                           transform transition-transform duration-300 hover:scale-105  rounded-full w-5/12'>
                              </div>
                         </div>
                    </div>
               </div>
               <div className='mt-12 flex justify-between '>
                   <div>
                    <h1 className='text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-500 to-blue-400'>
                      3+
                      </h1>    
                      <p>years dexperiences</p>
                    
                   </div>
                   <div>
                    <h1 className='text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-500 to-blue-400'>
                      50+
                      </h1>
                      <p>projects completed</p>
                    
                   </div>
                   <div>
                    <h1 className='text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-500 to-blue-400'>
                      10+
                      </h1>
                      <p>happy clients</p>
                    
                   </div>
               </div>
               
            </div>
        </div>
    </div>
</div> 
   
  )
}

export default About