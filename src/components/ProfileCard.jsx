import React from 'react'
import { motion } from 'motion/react'

const ProfileCard = ({items,index}) => {
  return (
    <div>
      <div className="overflow-hidden flex items-center w-36 sm:w-40 md:w-52 bg-[#c93a44] px-1 md:px-2 py-1 gap-2">
               <motion.img
               initial={{opacity:0, x: 20}}
               whileInView={{opacity:1, x:0}}
               transition={{duration:0.7, delay:0.5,  ease:'easeOut'}}
               viewport={{once:true}}
               src={items.pic} className='rounded-full size-8 md:size-12 ' alt="" />
               <motion.div
               initial={{opacity:0, x:40}}
               whileInView={{opacity:1, x:0}}
               transition={{duration:0.7, delay:0.5,  ease:'easeOut'}}
               viewport={{once:true}}
               className="">
                  <h5 className='text-sm md:text-base text-black font-bold'>{items.name}</h5>
                  <p className='text-xs  text-gray-900'>{items.role}</p>
               </motion.div>
            </div>
    </div>
  )
}

export default ProfileCard
