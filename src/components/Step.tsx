import React from 'react'
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
        <div id='step' className={`step text-white w-full h-[90%] bg-black p-14 rounded-4xl shadow flex justify-around items-center text-center md:flex-nowrap lg:flex-nowrap md:text-left lg:text-left ${stepClassName} `}>
            <div className='basis-full lg:basis-1/2'>
                <h2 className='font-bold text-xl lg:text-4xl'>{title}</h2>
                <p className='my-4 text-sm lg:text-lg'>{description}</p>
                {
                    btn && (
                        <GGbtn title={btn.title} takeTo={btn.takeTo} className={btn.className} />
                    )
                }
            </div>
            <div className='basis-full lg:basis-1/2 flex justify-center items-center'>
                <img src={img} alt="" className='w-full animate-pulse transition-transform duration-100' loading='lazy' />
            </div>
        </div>
    )
}

export default Step;