import './Showcase.css';
import { showcaseImg,GGlink } from '../..';
import React from 'react';
const Showcase: React.FC = () => {
    return (
        <div id='showcase' className='container'>
            <div className="row d-flex align-items-center">
                <div className="col-md-6 phone-adjust">
                    <p className='fw-bold'>Improve your life</p>
                    <h1 className='head fw-bold mb-4'>Powerful tool that saves you time a lot </h1>
                    <p className='mb-5'>Optimize your daily routine with tools that simplify task management, enhance weekly planning, and highlight progress effortlessly. Spend less time organizing and more time growing toward your goals.</p>
                    <GGlink title='Get Started' className='bg-dark text-light' takeTo={'/signup'}/>
                </div>
                <div className="img-col col-md-6">
                    <img src={showcaseImg} alt="" className='w-100' loading='lazy' />
                </div>
            </div>
        </div>
    )
}

export default Showcase;