import React from 'react'
import assets from '../assets/assets'
import { users } from '../assets/assets'
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <div className='h-fit pb-10 md:pb-20 px-10 md:px-20 w-screen   flex flex-col items-center gap-8'>

      <motion.div
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.6, delay:0.7,  ease:'easeInOut'}}
      viewport={{once:true}}
      className="flex items-center justify-center gap-2 border-2 w-fit px-5 py-2 rounded-4xl border-gray-400 mt-20 lg:mt-32">

        <div className="flex h-5 md:h-8 *:rounded-full ">
          {users.map((logo,index)=>(
            <img key={index} src={logo} alt="" />
          ))}
        </div>

        <p className='text-xs md:text-base'>Trusted by 10k+ people</p>

      </motion.div>
      <div className=" flex flex-col gap-3">

      <motion.h1
      initial={{opacity:0, y:40}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.7, delay:0.8,  ease:'easeInOut'}}
      viewport={{once:true}}
      className='text-2xl sm:text-5xl lg:text-7xl text-center'>Turning imaginaton into <br /> <span className='text-[#c93a44]'>digital</span> impact.</motion.h1>

      <motion.p
      initial={{opacity:0, y:30}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.8, delay:1, ease:'easeInOut'}}
      viewport={{once:true}}
      className='text-center text-xs md:text-lg text-gray-600 dark:text-gray-300'>Creating meaningful connection and turning big ideas into interactive digital experiences</motion.p>

      </div>
      
      <motion.img
      initial={{opacity:0, y:40}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.7, delay:1.5,  ease:'easeOut'}}
      viewport={{once:true}}
      className='w-fit lg:h-130   rounded-4xl' src={assets.hero} alt="" />
      
    </div>
  )
}

export default Hero
