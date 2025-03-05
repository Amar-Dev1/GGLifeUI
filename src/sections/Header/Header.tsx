import React, { useState } from 'react';
import { barIcon, arrowDown, GGlink, gglifeLogo } from '../..';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const handleBar = () => {
        setIsClicked(!isClicked)
    }
    return (
        <>
            <div id='header' className='w-full container bg-gray-50 backdrop:blur-sm flex justify-between items-center p-3 mx-auto rounded-full'>
                <Link to={'/'} className='flex justify-around items-center'><img src={gglifeLogo} alt="" width={'26px'} /><span className='logo font-bold text-2xl mx-2'>GGLife</span></Link>
                <div className='wide-nav hidden lg:flex xl:flex'>
                    <a className='px-4 py-2 mx-1 text-black' href="/">Home</a>
                    <a className='px-4 py-2 mx-1 text-black' href="#how">How it works</a>
                    <div className='about-link px-4 py-2 mx-1 text-black cursor-pointer relative group'>
                        about
                        <img src={arrowDown} alt="" className='w-2.5 absolute right-2 top-1/2 -translate-y-1/2' />
                        <div className='about-links w-56 bg-[rgba(230,230,230,0.5)] backdrop-blur-sm rounded-2xl flex flex-col py-3 px-5 shadow absolute left-1/2 top-12 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300'>
                            <a href="#showcase" className='text-black hover:translate-x-4 transition-transform duration-300'>Why GGLife ?</a><hr />
                            <a href="#about" className='text-black hover:translate-x-4 transition-transform duration-300'>About GGLife</a>
                        </div>
                    </div>
                    <a className='px-4 py-2 mx-1 text-black' href="#contact">Contact us</a>
                </div>
                <div className='sub-wide-nav hidden lg:flex xl:flex'>
                    <a href="/signup" className='px-4 mx-2 py-2 text-black'>Get Started</a>
                    <GGlink title='Login' className='px-3 bg-black text-white' takeTo={'/login'} />
                </div>
                <div className='group bar-wrapper lg:hidden xl:hidden sm:block md:block w-6 cursor-pointer' onClick={handleBar} tabIndex={0}>
                    <img src={barIcon} alt="" className='w-full' />
                </div>
            </div>
            <div className={`narrow-nav text-center flex flex-col justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(230,230,230,0.5)] backdrop-blur-sm rounded-4xl w-4/5 h-7/10 scale-0 transition-all duration-300 ${isClicked ? 'scale-100 opacity-100' : ''} `}>
                <span className='cursor-pointer mb-3' onClick={handleBar}>❌</span>
                <a className='py-3 text-black' onClick={handleBar} href="/">Home</a>
                <div className='about-link w-fit mx-auto py-3 text-black group cursor-pointer relative'>
                    about
                    <img src={arrowDown} alt="" className='w-2.5 absolute top-1/2 -right-4 -translate-y-1/2' />
                    <div className='about-links w-56 bg-[rgba(230,230,230,.7)] backdrop-blur-lg rounded-2xl flex flex-col py-3 px-5 shadow absolute left-1/2 top-12 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300'>
                        <a href="#about" className='text-black hover:translate-x-4 transition-transform duration-300' onClick={handleBar}>About GGLife</a><hr />
                        <a href="#showcase" className='text-black hover:translate-x-4 transition-transform duration-300' onClick={handleBar}>Why GGLife ?</a>
                    </div>
                </div>
                <a className='py-3 text-black w-fit mx-auto' onClick={handleBar} href="#how">How it works</a>
                <a className='py-3 text-black w-fit mx-auto' onClick={handleBar} href="#contact">Contact us</a>
                <a href="/signup" className='py-3 text-black' onClick={handleBar}>Get Started</a>
                <GGlink title='Login' takeTo={'/Login'} className='w-fit px-4 mx-auto bg-black py-2 text-white rounded-full' onClick={handleBar} />
            </div>
        </>
    )
}
export default Header;