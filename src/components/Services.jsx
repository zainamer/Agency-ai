import React from 'react'
import Title from './Title'
import { details } from '../assets/assets'
import ServiceCard from './ServiceCard'

const Services = ( ) => {

  

  return (
    <div id='services' className='h-fit py-10 px-10 md:px-20 '>
      <Title title={'How can we help?'} desc1={'From strategy to execution, we craft digital solutions that move your'}  desc2={'business forward.'}/>
      
        <div className="flex gap-5 md:gap-10 pt-10 flex-wrap  flex-col sm:flex-row justify-center">
          {details.map((items,index)=>(
            <ServiceCard items={items} key={index} />
          ))}
        </div>
    </div>
  )
}

export default Services
