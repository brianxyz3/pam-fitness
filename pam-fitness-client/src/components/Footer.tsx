import React from 'react'
import { BsArrowRight, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaLocationDot } from 'react-icons/fa6'
import IconBtn from './IconBtn'
import FooterIconBtn from './FooterIconBtn'

const Footer = () => {
  return (
    <footer className='bg-red-600 px-6 sm:px-10 mx-10 text-black rounded-t-3xl'>
        <div className='h-[20vh] group hover:scale-x-110 duration-300 sm:h-[30vh] w-fit mx-auto relative flex flex-col justify-center'>
            <h5 className='text-xl md:text-5xl font-[600] text-center scale-150 md:tracking-wider'>LETS TALK</h5>
            <div className='bg-black absolute hover:scale-105 -right-[40%] w-fit p-1 md:p-2 rounded-full'>
                <BsArrowRight className='-rotate-45 group-hover:rotate-0 size-2 md:size-4 fill-white duration-300'/>
            </div>
        </div>
        {/* mobile screen size gym open hours */}
        <div className='w-full tracking-tight text-nowrap text-sm leading-8 rounded-3xl flex sm:hidden flex-col gap-y-1'>
            <h5 className='text-lg font-bold'>TIME</h5>
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
                <li className='hover:text-white duration-300'>About Us</li>
                <li className='hover:text-white duration-300'>Services</li>
                <li className='hover:text-white duration-300'>Projects</li>
                <li className='hover:text-white duration-300'>Reviews</li>
            </ul>
            <div className='w-fit flex gap-4'>
                <FooterIconBtn link='/'>
                    <BsInstagram/>
                </FooterIconBtn>
                <FooterIconBtn link='/'>
                    <FaFacebook/>
                </FooterIconBtn>
                <FooterIconBtn link='/'>
                    <BsTwitter/>
                </FooterIconBtn>
            </div>
        </div>
    </footer>
  )
}

export default Footer