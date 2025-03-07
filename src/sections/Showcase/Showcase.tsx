import { showcaseImg, GGlink } from '../..';
import React from 'react';
const Showcase: React.FC = () => {
    return (
        <div id='showcase' className='container w-[95%] lg:w-[90%] mx-auto py-14'>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center text-center lg:text-left">
                <div>
                    <p className='font-bold text-sm lg:text-lg'>Improve your life !</p>
                    <h1 className='head font-bold text-md lg:text-xl my-4'>Powerful tool that saves you time a lot </h1>
                    <p className='text-sm lg:text-lg'>Optimize your daily routine with tools that simplify task management, enhance weekly planning, and highlight progress effortlessly. Spend less time organizing and more time growing toward your goals.</p>
                    <GGlink title='Get Started' className='text-white mt-3' takeTo={'/signup'} />
                </div>
                <div className="mt-8 lg:mt-0">
                    <img src={showcaseImg} alt="" className='w-100 animate-pulse' loading='lazy' />
                </div>
            </div>
        </div>
    )
}

export default Showcase;