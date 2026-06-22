import React from 'react'

const ServiceCard = ({items}) => {
  return (
    <div className=''>
      <div  className="relative dark:bg-white bg-teal-200  hover:p-0.5 transition-all duration-500">

         <div  className="flex w-full items-center gap-5 p-3 hover:p-2.5 transition-all duration-500 bg-[#c93a44] hover:shadow-gray-600 dark:hover:shadow-gray-400 shadow-lg">

            <img src={items.icon} className='w-10 md:w-15 bg-amber-100  rounded-full p-2' alt="" />
  
            <div className="">
              <h4 className='font-bold text-sm text-black'>{items.title}</h4>
              <p className='text-xs mt-2 text-gray-800'>{items.description}</p>     
            </div>
         </div>
      </div>
    </div>
  )
}

export default ServiceCard
