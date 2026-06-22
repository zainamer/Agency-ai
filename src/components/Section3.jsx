import React from 'react'
import Title from './Title'
import { profile } from '../assets/assets'
import ProfileCard from './ProfileCard'

const Section3 = () => {
  return (
    <div className='py-10 md:px-20 '>
      <Title title={'Meet the team'} desc1={'A passionate team of digital experts dedicated to your'} desc2={"brand's success."}/>

      <div className=" flex flex-wrap gap-10 items-center justify-center py-10">
         {profile.map((items,index)=>(
            <ProfileCard items={items} key={index}/>
         ))}
      </div>
    </div>
  )
}

export default Section3
