import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeChange from './ThemeChange'
import { motion } from 'motion/react'

const Nav = ({theme,setTheme}) => {

   const [isOpen,SetIsOpen] = useState(false)

  return (
    <motion.div
    initial={{opacity:0, y:-50}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.6, ease:'easeout'}}
     className=' bg-amber-50 dark:bg-black py-2 px-3 md:px-5 flex items-center justify-between w-full fixed top-0 lg:px-20 z-10'>
      <div className='flex gap-1 items-center'>
      <img className='h-5 md:h-10 ' src={assets.logo} />
         <h1 className='font-bold text-xl md:text-2xl'>agency. <span className='text-[#c93a44]'>ai</span></h1>
      </div>

      <ul className={`flex  flex-col absolute dark:bg-black bg-amber-50 top-0 right-0 z-50 h-screen *:pr-15 *:py-3 *:p-5  text-[#c93a44] *:hover:underline sm:items-center sm:flex-row sm:static sm:h-auto sm:*:pr-0 sm:*:py-0 sm:*:p-3 ${isOpen ? "translate-x-0" : "translate-x-full sm:translate-x-0"}`}>
         <li onClick={()=>{SetIsOpen(false)}}><a href="#">Home</a></li>
         <li onClick={()=>{SetIsOpen(false)}}><a href="#services">Services</a></li>
         <li onClick={()=>{SetIsOpen(false)}}><a href="#our-work">Our Work</a></li>
         <li onClick={()=>{SetIsOpen(false)}}><a href="#contact-us">Contact Us</a></li>
      </ul>
      <div className='flex gap-2 items-center mr-8 sm:mr-0'>
         <ThemeChange theme={theme} setTheme={setTheme}/>
         <a className='font-bold bg-[#c93a44] text-xs md:text-base rounded-2xl px-2 py-1' href="#contact-us">Contact</a>
      </div>
      <img onClick={()=>SetIsOpen(prev=>!prev)} src={theme === 'dark' ? assets.white_menu : assets.menu} className='h-6  absolute right-2 z-10 sm:hidden'/>

    </motion.div>
  )
}

export default Nav
