import React from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import IconBtn from './IconBtn';

const Hero = () => {
  return (
    <section className="hero_section">
      <div className='h-[90vh] flex items-center'>
        <div className="w-[23rem] gym_hour tracking-widest leading-8 ms-8 p-8 rounded-3xl text-base flex flex-col gap-y-1">
          <h5 className="text-lg font-bold">TIME</h5>
          <div className='flex justify-between'>
            <p>Mon to Sat</p>
            <p>6-11:30pm, 6-8:30pm</p>
          </div>
          <div className='flex justify-between'>
            <p>Sun</p>
            <p>Closed</p>
          </div>
          <hr className='my-3'/>
          <div className='flex justify-between items-center bg-gradient-to-r from-black/50 via-zinc-900 to-zinc-600 p-1 rounded-3xl'>
            <p className='font-bold ms-3'>OUR LOCATION</p>
            <IconBtn style='size-10 bg-red-600'><FaLocationDot className='size-5'/></IconBtn>
          </div>
        </div>
      </div>
      <h1 className="bg-[linear-gradient(#ffffff_35%,#808080_55%,#1b1a1a_100%)] bg-clip-text text-transparent text-6xl text-center font-bold">TRAIN HARD, LIVE WELL</h1>
    </section>
  )
}

export default Hero;