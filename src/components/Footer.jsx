import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const Footer = () => {
  return (
    <motion.div
    initial={{opacity:0, y:80}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.7, delay:0.5,  ease:'easeOut'}}
      viewport={{once:true}}
    className='bg-amber-50 dark:bg-black py-5 px-5 md:px-20'>
      <div className="py-2 md:flex justify-between ">
         <div className="">
            <div className='flex gap-1 items-center'>
               <img className='h-5 md:h-10 ' src={assets.logo} />
               <h1 className='font-bold text-xl md:text-2xl'>agency. <span className='text-[#c93a44]'>ai</span></h1>
            </div>
            <p className='text-xs mt-1 md:mt-5 text-gray-600 dark:text-gray-300'>From strategy to execution, we craft digital solutions that move your business forward.</p>
            <ul className='flex py-3 md:py-8 gap-5 text-gray-600 dark:text-gray-300 text-xs'>
               <li><a href="#">Home</a></li>
               <li><a href="#services">Services</a></li>
               <li><a href="#our-work">Our work</a></li>
               <li><a href="">Testimonial</a></li>
            </ul>
         </div>
         <div className="flex flex-col ">
            <p className='text-xs font-bold md:text-sm mt-3 '>Subcribe to our newsletter</p>
            <p className='text-xs mt-1 md:mt-3 text-gray-600 dark:text-gray-300'>The latest news, article, and resources, sent to your inbox weekly.</p>
            <div className=" flex py-2 md:py-10 gap-4">
               <input className='outline-0 shadow-2xl shadow-amber-400 s px-3 py-1' type="text" placeholder='Enter your email' />
               <button className='bg-[#c93a44] active:bg-[#ef636c] px-1 rounded-md'>Subscribe</button>
            </div>
         </div>
      </div>
      <hr />
      <div className="py-2">
         <p className='text-xs '>copyright 2025 &copy;agency.ai - All Rights Reserved</p>
      </div>
    </motion.div>
  )
}

export default Footer
