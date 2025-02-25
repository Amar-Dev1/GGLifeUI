// this is for how it works section

import React from 'react'
import GGbtn, { GGLinkProps } from './GGlink';

interface StepProps {
    title: string;
    description: string;
    img: string;
    btn?: GGLinkProps;
    className?: string;
}

const Step: React.FC<StepProps> = ({ title, description, img, className, btn }) => {
    return (
        <div id='step' className={`container text-light bg-dark p-5 shadow ${className} `}>
            <div className='text-wrapper'>
                <h2 className='fw-bold fs-1 my-3'>{title}</h2>
                <p className=''>{description}</p>
                {
                    btn && (
                        <GGbtn title={btn.title} color={btn.color} backgroundColor={btn.backgroundColor} />
                    )
                }
            </div>
            <div className='img-wrapper p-4'>
                <img src={img} alt="" className='w-100' loading='lazy'/>
            </div>
        </div>
    )
}

export default Step;