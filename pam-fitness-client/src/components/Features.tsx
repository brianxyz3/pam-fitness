import React from 'react'
import FeaturesCard from './FeaturesCard'
import IconBtn from './IconBtn'
import { BsArrowRight } from 'react-icons/bs'

const Features = () => {
  return (
    <section className='mx-10 mb-24'>
        <div className='flex justify-between items-center text-gray-400'>
            <h2 className='text-4xl scale-y-150 font-bold'>The Support You Deserve</h2>
            <p className='text-sm w-2/5'>Since 2019, we've been dedicated to providing a dynamic and supportive environment where levels can thrive.</p>
        </div>
        <div className='features_grid my-10'>
            {/* <FeaturesCard/> */}
            <FeaturesCard style='img1 bg-pink-300' title='Motivation Tools' desc='Workouts built around your fitness level, schedule, and goals -- no guesswork, just progress'/>
            <FeaturesCard style='img2 bg-red-300' title='Nutrition Guidance' desc='No downloads, no setup--just join instantly, editors now use for them. Make data-driven decicions.'/>
            <FeaturesCard style='img3 bg-blue-300' title='Progress Tracking' desc='No downloads, no setup--just join instantly, editors now use for them. Make data-driven decicions.'/>
            <FeaturesCard style='img4 bg-green-300' title='Personalized Workout Plans' desc='Workouts built around your fitness level, schedule, and goals -- no guesswork, just progress'/>
        </div>

        <div className='w-fit mx-auto bg-red-600 flex items-center gap-2 text-nowrap text-sm p-1 rounded-3xl'>
          <p className='ps-3'>JOIN OUR TEAM</p>
          <IconBtn style='size-8 bg-black'>
            <BsArrowRight className='-rotate-45 size-4 fill-red-600'/>
          </IconBtn>
        </div>
    </section>
  )
}

export default Features