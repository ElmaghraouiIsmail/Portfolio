import React from 'react'

const Service=[
    {
        id:1,
        title:'web devloppeur',
        description:'im building modern web application',
    },
    {
        id:2,
        title:'network admin',
        description:'im a network administrator',
    },
    {
        id:3,
        title:'web devloppeur',
        description:'im building modern web application',
    },
    {
        id:4,
        title:'web devloppeur',
        description:'im building modern web application',
    },
    {
        id:5,
        title:'web devloppeur',
        description:'im building modern web application',
    },
    {
        id:6,
        title:'web devloppeur',
        description:'im building modern web application',
    }
]
const Services = () => {
  return (
    <div className='bg-black text-white py-20' id='Service'>
     <div className='container  px-8 md:px-16 lg:px-24'>
       <h2 className='text-2xl font-bold text-center mb-6'>My Services</h2>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

       {Service.map(service => ( 
         <div key={service.id} 
         className='mb-6 bg-gray-800 px-6 py-6 hover:scale-105 rounded-lg transform 
         transition-transform duration-300 '
         >
          <div className='text-right text-2xl text-transparent font-bold bg-clip-text 
            bg-gradient-to-r from-green-400 to-blue-500 '
            >
            {service.id}
          </div>
          <h3 className='text-2xl text-transparent font-bold bg-clip-text 
            bg-gradient-to-r from-green-400 to-blue-500'
            >
            {service.title}
          </h3>
          <p className=' mt-2 text-gray-400'
            >
            {service.description}
          </p>
          <a href="#" className='mt-2 md:inline text-green-400 hover:text-blue-300'>Read more</a>
         </div>
       ))}
       </div>

     </div>
    </div>
  );
};

export default Services