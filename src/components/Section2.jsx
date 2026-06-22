import React from 'react'
import Title from './Title'
import { workDetails } from '../assets/assets'
import WorkCard from './WorkCard'


const Section2 = () => {
  return (
    <div id='our-work' className='h-fit md:py-10 px-10 md:px-20'>
      <Title title={'Our latest work'} desc1={'Browse our portfolio of innovation digital projects that showcase'}  desc2={'creativity, performance, and results.'}/>

      <div className="flex flex-wrap gap-5 items-center justify-center pt-10 md:pt-15">
        {workDetails.map((items,index)=>(
          <WorkCard items={items} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Section2
