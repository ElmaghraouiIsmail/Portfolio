import React from 'react'
import marin from '../assets/marin_image.jpg'


const Projects=[
    {
        id:1,
        name:'employe',
        technologie:'mern stack',
        image:marin,
        Github:'https//Github.com/Youafkhan1',
    },
    {
        id:2,
        name:'employe',
        technologie:'mern stack',
        image:marin,
        Github:'https//Github.com/Youafkhan1',
    },
    {
        id:3,
        name:'employe',
        technologie:'mern stack',
        image:marin,
        Github:'https//Github.com/Youafkhan1',
    },
    {
        id:4,
        name:'employe',
        technologie:'mern stack',
        image:marin,
        Github:'https//Github.com/Youafkhan1',
    },
    {
        id:5,
        name:'employe',
        technologie:'mern stack',
        image:marin,
        Github:'https//Github.com/Youafkhan1',
    },
    {
        id:6,
        name:'employe',
        technologie:'mern stack',
        image:marin,
        Github:'https//Github.com/Youafkhan1',
    },
]
const Project = () => {
  return (
    <div className='bg-black text-white py-12' id='Project'>
       <div className='container mx-auto px-8 md:px-16 lg:px-24'>
         <h3 className='text-2xl font-bold text-center pb-16'>My Projects</h3>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {Projects.map(project => (
            <div key={project.id} className='bg-gray-800 p-6 mx-4 my-4 rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform
                                              duration-300 gap-8 '>
                <img src={project.image} alt="image" className=' h-60 rounded-lg object-cover w-60'/>
                <h3 className='text-2xl text-white font-bold pt-2'>{project.name}</h3>
                <p className='text-1xl text-gray-400 pt-2 pb-6'>{project.technologie}</p>
                 <a href={Projects.Github} className='bg-gradient-to-r from-green-400 to-blue-500 py-2 px-2 hover:scale-105 
                                                      transform transition-transform duration-300 rounded-full'>Github</a>
            </div>

        ))}
         </div>
       </div>
    </div>
  )
}

export default Project