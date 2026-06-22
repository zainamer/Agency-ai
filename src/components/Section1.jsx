import React from 'react'
import { companies } from '../assets/assets'
import { motion } from 'motion/react'

const Section1 = () => {
  return (
    <div className='h-fit py-10 w-full flex flex-col gap-8 px-10 items-center'>
      <motion.p
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.7,delay:0.8}}
      viewport={{once:true}}
      className='text-xs md:text-base text-gray-600 dark:text-gray-300'>Trusted by Leading Companies</motion.p>
      <motion.div
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.7, delay:0.8}}
      viewport={{once:true}}
      className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:flex *:h-5 md:*:h-6 ">
        {companies.map((logo,index)=>(
          <img key={index} src={logo} alt="" />
        ))}
      </motion.div>
    </div>
  )
}

export default Section1
