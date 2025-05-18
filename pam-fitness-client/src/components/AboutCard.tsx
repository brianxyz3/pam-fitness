import React from 'react'

interface AboutCardProps {
    title: string;
    desc: string;
    children: any;
}

const AboutCard: React.FC<AboutCardProps> = ({title, desc, children}) => {
  return (
    <div className='bg-zinc-900/80 w-[30%] p-6 rounded-2xl'>
        {children}
        <h5 className="text-xl scale-y-125 tracking-tight font-bold my-3">{title}</h5>
        <p className="text-gray-400 leading-7 tracking-wide text-lg">{desc}</p>
    </div>
)
}

export default AboutCard;