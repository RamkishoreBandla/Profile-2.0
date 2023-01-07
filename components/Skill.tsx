import React from 'react'
import { motion } from 'framer-motion';
type Props = {
    directionLeft?: boolean,
  skillDetails:{
    imageUrl:string,
    percentage:String,
    name:String
  }
}

export default function  Skill({ directionLeft,skillDetails }: Props) {
    return (
        <div className='group realtive flex cursor-pointer space-x-5 space-y-5'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src={skillDetails.imageUrl}
                className='rounded-md border border-gray-500 object-cover w-30 h-30 md:w-28 md:h-28
        xl:w-30 xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            {/* <div className='relative opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>
                       {skillDetails.percentage}
                    </p>
                </div>
            </div> */}
        </div>
    )
}