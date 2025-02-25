import React, { lazy } from 'react'
import '../sections/Features/Features.css';

export interface FeatureProps {
    id?: number;
    icon: string;
    title: string;
    description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
    return (
        <div className='feature d-flex justify-content-around flex-column bg-light p-4 shadow'>
            <img src={icon} alt="" loading='lazy'/>
            <h3 className='my-3'>{title}</h3>
            <p className='text-muted'>{description}</p>
        </div>
    )
}

export default Feature;
