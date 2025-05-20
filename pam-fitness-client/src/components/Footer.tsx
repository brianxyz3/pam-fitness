import React from 'react'
import { BsArrowRight, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaLocationDot } from 'react-icons/fa6'
import IconBtn from './IconBtn'

const Footer = () => {
  return (
    <footer className='bg-red-600 px-6 sm:px-10 mx-10 text-black rounded-t-3xl'>
        <div className='h-[20vh] sm:h-[30vh] w-fit mx-auto relative flex flex-col justify-center'>
            <div className='text-xl md:text-5xl font-[600] text-center scale-150 md:tracking-wider'>LETS TALK</div>
            <div className='bg-black absolute -right-1/3 top-1/4 md:-right-1/4 md:top-[23%] w-fit p-1 md:p-2 rounded-full'>
                <BsArrowRight className='-rotate-45 size-2 md:size-4 fill-white'/>
            </div>
            
        </div>
        {/* mobile screen size gym open hours */}
        <div className="w-full tracking-tight text-nowrap text-sm leading-8 rounded-3xl flex sm:hidden flex-col gap-y-1">
            <h5 className="text-lg font-bold">TIME</h5>
            <div className='flex justify-between gap-x-2'>
                <p>Mon to Sat</p>
                <p>6-11:30pm, 6-8:30pm</p>
            </div>
            <div className='flex justify-between'>
                <p>Sun</p>
                <p>Closed</p>
            </div>
            <hr className='my-3 border-t-2 border-black'/>
            <div className='flex justify-between items-center mb-3'>
                <p className='font-bold'>OUR LOCATION</p>
                <IconBtn style='size-10 bg-red-600'><FaLocationDot className='size-5'/></IconBtn>
            </div>
        </div>
        <div className='border-t-2 py-2 h-fit border-black flex justify-between items-center flex-wrap gap-y-2'>
            <p>PAM-FITNESS</p>
            <ul className='flex flex-wrap gap-x-6 justify-between gap-y-2'>
                <li>About Us</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Reviews</li>
            </ul>
            <div className='w-fit flex gap-4'>
                <div className='p-2 border-2 border-black rounded-full'>
                    <BsInstagram/>
                </div>
                <div className='p-2 border-2 border-black rounded-full'>
                    <FaFacebook/>
                </div>
                <div className='p-2 border-2 border-black rounded-full'>
                    <BsTwitter/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer