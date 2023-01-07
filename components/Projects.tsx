import React from 'react'
import {motion} from 'framer-motion';
type Props = {}

export default function Projects({ }: Props) {
    const projects =[1,2,3,4,5];
    const projDetails=[
        {
            projName:'Restaurant Management System',
            projDescription:`This project covers most of the features used in the current restaurant websites such as placing the order, reserving the table,
             providing reviews, Able to choose offers, Register and login feature, Updating profile, Tracking the current/previous order.`
        },
        {
            projName:'UAlbany Expert Finder',
            projDescription:`Based on the provided abstract/text UAlbany Expert
            Finder recommends the best-suited personnel from that field based
            on their previous research field and experience`
        },
        {
            projName:'UAlbany Matchmaker',
            projDescription:`UAlbany Matchmaker is a platform that generates similar
            funding/research opportunities based on their previous research work
            or provided abstracts`
        },
        {
            projName:'Team Awards',
            projDescription:`Team Awards is the application used by the partner
            nominators to nominate the individuals or teams and later reviewed by
            the pod members based on the performance of the partner, award
            status will be initiated`
        },
        {
            projName:'Leadership Enterprise Application',
            projDescription:`LEA is the application used by leadership-level roles to
            monitor and review the growth of partners based on their performance
            in every Fiscal Year`
        }
    ]
    return (
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}


        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>

            <h3 className='absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl'> 
            Projects 
            </h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
                {projDetails.map((p,i)=>(
                <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                    initial={{
                        y:-300,
                        opacity:0
                    }}
                    transition={{duration:1.2}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    className="h-[200px] w-[200px]"
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"/>
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'> 
                        <span className='underline decoration-[#F7AB0A]/50'>{p.projName}</span> 
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                          {p.projDescription}
                          </p>
                </div>
                
                </div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>

            </div>

        </motion.div>
    )
}