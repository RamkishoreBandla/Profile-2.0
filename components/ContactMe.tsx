import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid";
type Props = {}

export default function ContactMe({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='absolute top-40 flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                I have what you need.{" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets talk</span>
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5'>
                     <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'  />
                     <p>+1-838-200-6932</p>
                </div>
                <div className='flex items-center space-x-5'>
                     <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'  />
                     <p>bandlaramkishore090@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5'>
                     <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'  />
                     <p>Albany, NY</p>
                </div>
            </div>

            <form  className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input type="text" placeholder='Name' className='contactInput' />
                    <input type="text" placeholder='Email' className='contactInput'/>
                </div>
                <input type="text" placeholder='Subject' className='contactInput'/>
                    <textarea placeholder='Message' className='contactInput'/>
                <button type='submit' className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
        
        </div>
  )
}