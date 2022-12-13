import React from 'react'
import {motion} from 'framer-motion';
type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative text-center md:text-left h-screen
     md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'> 
        About
        </h3>
        
        <motion.img
        initial={{
            x: -200,
            opacity:0
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{x:0, opacity:1}}
        viewport={{once:true}}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-57 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]" 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAePHGk4zQacrlExygB4QUQlmSmCR9Qxd1Sw&usqp=CAU'     
        />

        <div className='space-y-10 px-10 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a <span className='underline decoration-[#F7AB0A]/50'> little</span> background
            </h4>
            <p className='text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus magni omnis voluptates cupiditate, quo tempora laudantium aliquam, deleniti ipsa fugiat ducimus neque ratione dolore iste soluta iusto eligendi necessitatibus!
            </p>
        </div>


        </motion.div>
  )
}