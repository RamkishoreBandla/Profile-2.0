import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
type Props = {}

export default function WorkExperience({ }: Props) {

    const Details=[
        {
            id:1,
            name:'The Research Foundation for SUNY, SUNY RF',
            role:'Research Assistant',
            startData:'08/2022',
            endData:'Current',
            skills:['https://cdn-icons-png.flaticon.com/512/5968/5968292.png'],
            responsibilities:['UI','Backend','CI/CD']

        },{
            id:2,
            name:'Infosys',
            role:'Specialist Programmer',
            startData:'11/2020',
            endData:'07/2022',
            skills:['https://cdn-icons-png.flaticon.com/512/5968/5968292.png'],
            responsibilities:['UI','Backend','CI/CD']
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden
             flex-col text-left md:flex-row max-w-full
             px-10 justify-evenly mx-auto items-center'
             >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl' >
                Experience
            </h3>
            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
            scrollbar scrollbar-track-gray-400/20  scrollbar-thumb-[#f7ab0a]/80
            '>
                <ExperienceCard details={Details[0]} />
                <ExperienceCard details={Details[1]} />
               
            </div>
        </motion.div>
    )
}