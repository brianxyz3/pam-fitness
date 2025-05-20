import React from 'react'
// import { Link } from 'react-router';
import Accordion from './Accordion';
import { BsArrowRight } from 'react-icons/bs';
import IconBtn from './IconBtn';

const NavBar = () => {

  const navLinks = [
    {
      title: "Services",
      items: ["Personalized workout Plans", "Nutritional guidance", "Progress tracking", "Motivational community"],
      links: [],
    },
    {
      title: "About",
      items: ["Our mission", "Our values", "Our history"],
      links: [],
    },
    {
      title: "Coaches",
      items: ["Certified personal trainer", "strength conditioning coach", "Nutrition expert", "Cardio specialist", "Yoga & mindfulness coach"],
      links: [],
    },
  ]

  return (
    <nav className='w-dvw z-10 text-sm text-gray-300 py-5 px-10 fixed top-2 flex justify-between'>
      {/* logo */}
      <div>Pam-Fitness</div>
      
      {/* nav items/ site links */}
      <div className='hidden sm:flex w-3/5 justify-evenly'>
        {navLinks.map((navItem, idx) => (
          <Accordion key={idx} title={navItem.title} items={navItem.items} />
        ))} 
        <p>Contact</p>
      </div>

      <div>
        {/* Call to action */}
        <div className='hidden sm:flex items-center gap-1.5 border border-gray-400 text-xs p-1 rounded-3xl'>
          <p>JOIN OUR TEAM</p>
          <IconBtn style='size-6 bg-red-600'>
            <BsArrowRight className='-rotate-45 size-3'/>
          </IconBtn>
        </div>

        {/* mobile screen nav icon */}
        <div className='sm:hidden'>
          icon
        </div>
      </div>
      <ul className='absolute right-0 translate-x-32'>
        <li>Services</li>
        <li>About</li>
        <li>Coaches</li>
        <li>Contact</li>
        <li>Join Our Team</li>
      </ul>
    </nav>
  )
}

export default NavBar;