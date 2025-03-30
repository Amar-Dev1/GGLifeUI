import React from 'react'
import { GGlink } from '../..';
const Landing: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1500);
  }
  return (
    <>
      <div id="landing" className='min-h-[80vh] flex justify-center items-center p-4 my-4'>
        <div className="text-center py-4 flex flex-col items-center">
          <h1 className='text-3xl lg:text-5xl font-bold'>Take Control of Your Life ⚡</h1>
          <p className='text-gray-500 my-7 w-[60%] text-wrap text-sm lg:text-lg'>Empower your personal growth by simplifying daily tasks and fostering meaningful routines. Organize priorities, cultivate consistency, and track progress with clarity and purpose.</p>
          <GGlink title='Get into dashboard !' className='bg-black text-white' takeTo={'#'} onClick={handleClick}/>
          <span className={`soon-message font-bold my-3 text-xl transition-all ${show ? 'scale-100':'scale-0'}`}>Soon !</span>
        </div>
      </div>
    </>
  )
}

export default Landing;
