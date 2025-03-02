import React from 'react'
import '../App.css'
import GGbtn, { GGLinkProps } from './GGlink';

interface StepProps {
    title: string;
    description: string;
    img: string;
    btn?: GGLinkProps;
    stepClassName?: string;
}

const Step: React.FC<StepProps> = ({ title, description, img, stepClassName, btn }) => {
    return (
        <div id='step' className={`step container text-light bg-dark p-5 shadow ${stepClassName} `}>
            <div className='text-wrapper'>
                <h2 className='fw-bold fs-1 my-3'>{title}</h2>
                <p className=''>{description}</p>
                {
                    btn && (
                        <GGbtn title={btn.title} takeTo={btn.takeTo} className={btn.className} />
                    )
                }
            </div>
            <div className='img-wrapper p-4'>
                <img src={img} alt="" className='w-100 rounded-4' loading='lazy' />
            </div>
        </div>
    )
}

export default Step;