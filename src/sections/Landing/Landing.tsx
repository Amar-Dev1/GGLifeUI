import React from 'react'
import './Landing.css';
import { GGlink } from '../..';
const Landing: React.FC = () => {
  return (
    <>
      <div id="landing" className='d-flex justify-content-center align-items-center p-4 my-4'>
        <div className="main-text text-center py-4 d-flex flex-column align-items-center">
          <h1 className='intro fw-bold'>Take Control of Your Life ⚡</h1>
          <p className='text-muted my-5'>Empower your personal growth by simplifying daily tasks and fostering meaningful routines. Organize priorities, cultivate consistency, and track progress with clarity and purpose.</p>
          <GGlink title='Get into dashboard !' className='bg-dark text-light px-3 py-2' takeTo={'/dashboard'} />
        </div>
      </div>
    </>
  )
}

export default Landing;
