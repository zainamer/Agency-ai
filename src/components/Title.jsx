import React from 'react'
import { motion } from 'motion/react'

const Title = ({title,desc1,desc2}) => {
  return (
    <div className='flex flex-col gap-5  items-center'>
      <motion.h1
      initial={{opacity:0, y:30}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.6, delay:0.5,  ease:'easeOut'}}
      viewport={{once:true}}
      className='text-2xl md:text-4xl'>{title}</motion.h1>
      <motion.p
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.8, delay:0.6,  ease:'easeOut'}}
      viewport={{once:true}}
      className='text-xs md:text-base text-center text-gray-600 dark:text-gray-300'>{desc1} <br /> {desc2}</motion.p>
    </div>
  )
}

export default Title
