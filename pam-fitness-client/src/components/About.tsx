import React from 'react'
import { BiDumbbell, BiTargetLock } from 'react-icons/bi';
import AboutCard from './AboutCard';
import { PiEyeFill } from 'react-icons/pi';
import { communityImg } from '../assets/images';

const About = () => {
  return (
    <section className='mx-10'>
        <h5 className="text-xl tracking-tighter bg-[linear-gradient(#000000_10%,#dc2626_50%,#000000_90%)] bg-clip-text text-transparent">ABOUT US</h5>
        <h2 className='text-4xl scale-y-150 my-5 font-bold'>DISCOVER THE <br />DIFFERENCE</h2>
        <div className='flex justify-between items-center mb-6'>
            <div className='about_img relative'>
                <img src={communityImg} alt='' className='w-full h-96'/>
            </div>
            <div className='w-1/2'>
                <h3 className="text-3xl font-bold scale-y-150 mb-4">EXPERIENCE FITNESS LIKE NEVER BEFORE- WHERE <span className="text-red-600">PASSION, POWER, AND COMMUNITY UNITE</span></h3>
                <p className="text-gray-400 pt-5 pb-8 tracking-wide leading-8 text-lg">We're passionate about transforming lives through fitness. Since 2019, we've been dedicated to providing a dynamic and supportive environment where individuals of all fitness levels can thrive</p>
                <a href="/" className="border border-gray-400 tracking-tight rounded-3xl px-4 py-2 font-bold">LEARN MORE ABOUT US</a>
            </div>
        </div>
        <div className='flex justify-between mt-14'>
            <AboutCard 
                title='OUR MISSION'
                desc='Our mission is clear: empower to reach their fitness goals, unlock their potential, and lead happier lives.'
                >
                <BiTargetLock className='text-red-600 size-[4rem] mt-4 mb-5'/>
            </AboutCard>
            
            <AboutCard
                title='OUR VALUES'
                desc='Driven by upassion, fueled by results. Unleash your strength, embrace your potential. Together, we lift each other higher.'
                >
                <PiEyeFill className='text-red-600 size-[4rem] mt-4 mb-5'/>
            </AboutCard>
            
            <AboutCard
                title='OUR HISTORY'
                desc="We've helped countless individuals transform their lives through fitness, and our commitment to empowering others remains as strong as ever."
                >                    
                <BiDumbbell className='text-red-600 size-[4rem] mt-4 mb-5'/>
            </AboutCard>
        </div>
    </section>
  )
}

export default About;