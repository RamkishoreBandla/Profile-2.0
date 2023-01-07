import React from 'react'
import {motion} from 'framer-motion';
import Skill from './Skill';
type Props = {}

export default function Skills({}: Props) {

  const skillDetails=[
    {
      imageUrl:"https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    percentage:"90%",
    name:"Javascript"
    },
    {
      imageUrl:"https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    percentage:"80%",
    name:"TypeScript"
    },
    {
      imageUrl:"https://cdn-icons-png.flaticon.com/512/875/875209.png",
    percentage:"90%",
    name:"React.js"
    },
    {
      imageUrl:"https://as2.ftcdn.net/v2/jpg/02/95/03/85/1000_F_295038583_mn0uxJ6A0YO57HA4xXQqHFUjiW1BcqBE.jpg",
    percentage:"80%",
    name:"Angular"
    },
    {
     
      imageUrl:"https://cdn-icons-png.flaticon.com/512/919/919825.png",
      percentage:"80%",
      name:"Node.js"
    },
    {
     
      imageUrl:"https://cdn-icons-png.flaticon.com/512/919/919836.png",
      percentage:"80%",
      name:"MySQL"
    },
    {
      imageUrl:"./mongodb.jpg",
      percentage:"80%",
      name:"MongoDB"
    },
    {
      imageUrl:"https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
      percentage:"80%",
      name:"Java"
    },
    {
      imageUrl:"https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      percentage:"80%",
      name:"Python"
    },
    {
      imageUrl:"https://cdn-icons-png.flaticon.com/512/5969/5969059.png",
      percentage:"80%",
      name:"Docker"
    },
    {
      imageUrl:"https://cdn-icons-png.flaticon.com/512/2085/2085263.png",
      percentage:"80%",
      name:"HTML , CSS"
    }
]

  return (
    <motion.div 
    initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
    className='flex relative flex-col text-center md:text-left xl:flex-row 
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
   
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover over for skill proficiency
        </h3>

            <div className='grid grid-cols-4 gap-5'>
              {skillDetails.map((skill,i)=> <Skill key={i} skillDetails={skill}/>)}
            </div>
            
    </motion.div>
  )
}