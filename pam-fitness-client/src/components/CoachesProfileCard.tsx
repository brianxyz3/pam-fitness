import React from 'react'

interface CoachesProfileCardProps {
    imageSrc: string;
    name: string;
    speciality: string;
    bio: string;
}

const CoachesProfileCard: React.FC<CoachesProfileCardProps> = ({imageSrc, name, speciality, bio}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition duration-300 card-hover">
        <img alt="Nutritionist with healthy food" className="w-full h-64 object-cover" src={imageSrc}/>
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-1 text-white">{name}</h3>
            <p className="text-custom-orange text-sm font-medium mb-2">{speciality}</p>
            <p className="text-gray-400 text-sm">{bio}</p>
        </div>
    </div>
  )
}

export default CoachesProfileCard