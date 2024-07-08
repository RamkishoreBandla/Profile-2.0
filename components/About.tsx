import React from 'react'
import {motion} from 'framer-motion';

type Props = {}

// type StaticImageData ={
//     src:string | StaticImageData
// }
// import ppic from './ppic.jpg';

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
        md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px] z-10" 
        src='https://media.licdn.com/dms/image/C5603AQGN8H_lSiVw-A/profile-displayphoto-shrink_400_400/0/1659730368066?e=1678320000&v=beta&t=kJ9eX6ZSDxqbhkou6o1YSKFGcJk6pgS1oORXVqJpfto'     
        />

        <div className='space-y-10 px-10 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a <span className='underline decoration-[#F7AB0A]/50'> little</span> background
            </h4>
            <p className='text-base'>
            Quick learner and excellent problem solver with experience and sound knowledge on cutting
edge up-to-date web development technologies such as React.js, Node.js, Angular, Express.js, ASP.NET MVC, ASP.NET Web API, 
MongoDB seeking a full stack web developer role in your company. I’d like to utilize my 4
years of experience as <span className='underline decoration-[#F7AB0A]/50'> Full </span>  stack web developer and problem-solving skills for your
company achieve its goals and learn new things that I don’t know of.
              </p>
        </div>


        </motion.div>
  )
}