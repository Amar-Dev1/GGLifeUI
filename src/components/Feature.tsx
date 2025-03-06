import React from 'react';

export interface FeatureProps {
    id?: number;
    icon: string;
    title: string;
    description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
    return (
        <div className='feature w-[90%] bg-white min-h-40 cursor-pointer flex flex-col justify-around  p-4 shadow rounded-xl hover:-translate-y-1 transition-all duration-500'>
            <img src={icon} alt="" loading='lazy'  className='w-10'/>
            <h3 className='my-2 font-bold '>{title}</h3>
            <p className='text-gray-500'>{description}</p>
        </div>
    )
}

export default Feature;
