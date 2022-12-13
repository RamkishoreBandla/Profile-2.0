import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import About from '../components/About'
const  About = dynamic(() => import('../components/About'), { ssr: false })
// import ContactMe from '../components/ContactMe'
const  ContactMe = dynamic(() => import('../components/ContactMe'), { ssr: false })
// import Header from '../components/Header'
const  Header = dynamic(() => import('../components/Header'), { ssr: false })
// import Hero from '../components/Hero'
const  Hero = dynamic(() => import('../components/Hero'), { ssr: false })
// import Projects from '../components/Projects'
const  Projects = dynamic(() => import('../components/Projects'), { ssr: false })
// import Skills from '../components/Skills'
const  Skills = dynamic(() => import('../components/Skills'), { ssr: false })
// import WorkExperience from '../components/WorkExperience'
const  WorkExperience = dynamic(() => import('../components/WorkExperience'), { ssr: false })


export default function Home() {
  return (
   <div className='bg-[rgb(36,36,36)] snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0   text-white h-screen 
   scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
   <Head>
    <title>Ram Bandla</title>
   </Head>
   <Header/>

    <section id="hero" className='snap-start'>
    <Hero />
    </section>

    <section id='about' className='snap-center'>
      <About/>
    </section>

    <section id="experience" className='snap-center'>
      <WorkExperience/>
    </section>

    <section id="skills" className='snap-start'>
    <Skills/>
    </section>
    <section id="projects" className='snap-start'>
      <Projects/>
    </section>

    <section id="contact" className='snap-start'>
    <ContactMe/>
    </section>


      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex flex-row-reverse px-10'>
    <img 
    className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
    src="https://cdn-icons-png.flaticon.com/512/8338/8338860.png"
    alt=""/>
          </div>

        </footer>
      </Link>

   </div>
  )
}
