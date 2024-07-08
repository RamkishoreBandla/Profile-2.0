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
            skills:['https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
                'https://cdn-icons-png.flaticon.com/512/875/875209.png',
                'https://cdn-icons-png.flaticon.com/512/919/919825.png',
                'https://cdn-icons-png.flaticon.com/512/919/919836.png',
                'https://cdn-icons-png.flaticon.com/512/5969/5969059.png',
                'https://cdn-icons-png.flaticon.com/512/2085/2085263.png'    
        ],
            responsibilities:[`Designed and developed the application’s matching algorithm`,`Developed user friendly UI using React.js and server logic using
            Express.js.`,`Implemented CI/CD using GitHub Actions and deployed the
            application using Docker, AWS`],
            companyImage:'https://www.suny.edu/media/suny/content-assets/images/research/SUNYRF-no-text.jpg'

        },{
            id:2,
            name:'Infosys',
            role:'Specialist Programmer',
            startData:'07/2020',
            endData:'07/2022',
            skills:['https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
            'https://cdn-icons-png.flaticon.com/512/875/875209.png',
            'https://cdn-icons-png.flaticon.com/512/919/919825.png',
            'https://cdn-icons-png.flaticon.com/512/919/919836.png',
            'https://cdn-icons-png.flaticon.com/512/5969/5969059.png',
            'https://as2.ftcdn.net/v2/jpg/02/95/03/85/1000_F_295038583_mn0uxJ6A0YO57HA4xXQqHFUjiW1BcqBE.jpg',
            'https://cdn-icons-png.flaticon.com/512/2085/2085263.png',
            "https://www.incredibuild.com/wp-content/uploads/2020/09/azure_devops-1.png",
            "https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png",
            `https://www.brainvire.com/wp/wp-content/uploads/2016/05/express-js-an-ideal-node-js-framework-to-develop-enterprise-web-applications.jpg`
        ],
            responsibilities:[`Implemented new features that will help to track the progress
            of the partners`,
            `Implemented a feature that will enable the leadership role to
            assign a review pod for a particular set of partners to track the
            progress of those set of partners`,
            `Designed and developed efficient and maintainable software
            according to business objectives and requirements from the
            clients`,`Managed development milestones from initial steps through
            final delivery.
            `,`Worked as a Full stack developer and wrote business and
            functional logic using React.js, Angular and Node.js.`],
            companyImage:'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1415386231/utypaslbyxwfuwhfdzxd.png'
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