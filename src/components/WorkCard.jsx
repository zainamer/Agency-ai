import React from 'react'
import { motion } from 'motion/react'

const WorkCard = ({items,index}) => {
  return (
    <motion.div
    initial={{opacity:0, x:20}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:0.8, delay:0.3, ease:'easeout'}}
    viewport={{once:true}}
    className=' hover:shadow-2xl hover:shadow-gray-700 dark:hover:shadow-gray-400 p-1.5 rounded-2xl transition-all duration-500'>
      <div  className=" max-w-76 flex flex-col gap-1 ">
            <img className='rounded-2xl h-52' src={items.icon} alt="" />
            <div className="">
              <h4 className='text-sm md:text-base font-bold'>{items.title}</h4>
              <p className='text-xs text-gray-600 dark:text-gray-300'>{items.description}</p>
            </div>
          </div>
    </motion.div>
  )
}

export default WorkCard
