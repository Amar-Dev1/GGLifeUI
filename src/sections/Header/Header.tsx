import React, { useState } from 'react';
import './Header.css';
import { barIcon, arrowDown, GGlink, gglifeLogo } from '../..';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const handleBar = () => {
        setIsClicked(!isClicked);
    }
    return (
        <>
            <div id='header' className='container d-flex justify-content-between align-items-center p-3 mx-auto'>
                <Link to={'/'} className='d-flex justify-content-around align-items-center'><img src={gglifeLogo} alt="" width={'26px'}/><span className='logo fw-bold fs-2 mx-2'>GGLife</span></Link>
                <div className='wide-nav d-flex'>
                    <a className='px-4 py-2 mx-1 text-dark' href="/">Home</a>
                    <a className='px-4 py-2 mx-1 text-dark' href="#how">How it works</a>
                    
                    <div className='about-link px-4 py-2 mx-1 text-dark'>
                        about
                        <img src={arrowDown} alt="" style={{ width: '10px', marginLeft: '10px' }} />
                        <div className='about-links d-flex flex-column py-3 px-5  shadow'>
                            <a href="#showcase" className='text-dark'>Why GGLife ?</a><hr />
                            <a href="#about" className='text-dark'>About GGLife</a>
                        </div>
                    </div>
                    <a className='px-4 py-2 mx-1 text-dark' href="#contact">Contact us</a>
                </div>
                <div className='sub-wide-nav'>
                    <a href="/signup" className='px-4 mx-2 py-2 text-dark'>Get Started</a>
                    <GGlink title='Login' className='px-2 px-3 bg-dark text-light' takeTo={'/login'}/>
                </div>
                <div className='bar-wrapper' onClick={handleBar}>
                    <img src={barIcon} alt="" />
                </div>
            </div>
            <div className={`narrow-nav text-center d-flex flex-column justify-content-center ${isClicked ? 'active' : ''}`}>
                <a className='py-3 text-dark' onClick={handleBar} href="/">Home</a>

                <div className='about-link py-3 text-dark'>
                    about
                    <img src={arrowDown} alt="" style={{ width: '10px', marginLeft: '3px' }} />
                    <div className='about-links d-flex flex-column py-3 px-5  shadow'>
                        <a href="#about" className='text-dark' onClick={handleBar}>About GGLife</a><hr />
                        <a href="#showcase" className='text-dark' onClick={handleBar}>Why GGLife ?</a>
                    </div>
                </div>
                <a className='py-3 text-dark' onClick={handleBar} href="#how">How it works</a>
                <a className='py-3 text-dark' onClick={handleBar} href="#contact">Contact us</a>
                <a href="/signup" className='py-3 text-dark' onClick={handleBar}>Get Started</a>
                <a href="#" className='px-4 bg-dark py-2 text-light rounded' onClick={handleBar}>Login</a>
            </div>
        </>
    )
}
export default Header;