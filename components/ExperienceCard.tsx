import React from 'react'
import {motion} from 'framer-motion';
type Props = {}

export default function ExperienceCard({}: Props) {
  return (
  <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 mt-10
  w-[500px] md:w-[600px] xl:w-[900px] xl:h-[550px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
 <motion.img 
    initial={{
        y:-100,
        opacity:0
    }}
    transition={{duration:1.2}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
 className='w-32 h-32 rounded-full xl:w-[200px] xh:h-[200px] object-cover object-center' 
 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAePHGk4zQacrlExygB4QUQlmSmCR9Qxd1Sw&usqp=CAU' 
 alt=''
 />

 <div className='px-0 md:px-10'>
    <h4 className='text-4xl font-light'>Research Project Assistant</h4>
    <p className='font-bold text-2xl mt-1'>The Research Foundation for SUNY, SUNY RF</p>
    <div className='flex space-x-2 my-2'>
    <img className='h-10 w-10 rounded-full'
    src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png'/>
    </div>
        <p className='uppercase py-5 text-gray-300'>Started word ... - Ended</p>

        <ul className='list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll
        scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
        </ul>
 
 
 </div>

  </article>
  )
}