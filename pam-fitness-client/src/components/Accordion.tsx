import React from 'react';
// import { Link } from 'react-router';

interface AccordionProps{
    title: string;
    items: string[];
    // link: string[];
}

const Accordion: React.FC<AccordionProps> = ({title, items}) => {
  return (
    <div className='relative group'>
        <a href='/'>{title}</a>
        <div className='absolute translate-x-2 hidden group-hover:flex flex-col text-xs pt-1'>
            {
                items.map((item: string, idx: number) => (
                    <a key={idx} href="/" className='bg-black text-nowrap hover:bg-blue-700 py-2 px-1'>{item}</a>
                ))
            }
        </div>
    </div>
  )
}

export default Accordion;