import React from 'react'

interface FeaturesCardProps {
    style: string;
    title: string;
    desc: string;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({style, title, desc}) => {
  return (
    <div className={`${style} img rounded-3xl flex flex-col justify-end`}>
        <div className='p-2 lg:p-4 rounded-b-3xl rounded-t-2xl features_card_text'>
            <h4 className="text-xl mb-1">{title}</h4>
            <p className='text-xs lg:text-base text-gray-400'>{desc}</p>
        </div>
    </div>
)
}

export default FeaturesCard