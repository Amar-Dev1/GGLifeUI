import React, { useState } from 'react';
import './Header.css';
import barIcon from '../../assets/bar-icon.png';
import arrowDown from '../../assets/arrow-down.png';
import { GGlink } from '../../../index';



const Header: React.FC = () => {

    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleBar = () => {
        setIsClicked(!isClicked);
    }

    return (
        <>
            <div id='header' className='container d-flex justify-content-between align-items-center p-3 mx-auto'>
                <div><a href="/" className='logo fw-bold text-dark fs-2'>GGLife</a></div>
                <div className='wide-nav d-flex'>
                    <a className='px-4 py-2 mx-1 text-dark' href="/">Home</a>
                    {/* <a className='px-4 py-2 mx-1 text-dark' href="#">dashboard</a> */}
                    <div className='about-link px-4 py-2 mx-1 text-dark'>
                        about
                        <img src={arrowDown} alt="" style={{ width: '10px', marginLeft: '10px' }} />
                        <div className='about-links d-flex flex-column py-3 px-5  shadow'>
                            <a href="#about" className='text-dark'>About GGLife</a><hr />
                            <a href="#showcase" className='text-dark'>Why GGLife ?</a>
                        </div>
                    </div>
                    <a className='px-4 py-2 mx-1 text-dark' href="#how">How it works</a>
                    <a className='px-4 py-2 mx-1 text-dark' href="#contact">Contact</a>
                </div>
                <div className='sub-wide-nav'>
                    <a href="#" className='px-4 mx-2 py-2 text-dark'>Get Started</a>
                    <GGlink title='Login' color='white' backgroundColor='black' padding='10px 20px' />
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
                            <a href="#about" className='text-dark'onClick={handleBar}>About GGLife</a><hr />
                            <a href="#showcase" className='text-dark'onClick={handleBar}>Why GGLife ?</a>
                        </div>
                    </div>
                {/* <a className='py-3 text-dark' onClick={handleBar} href="#">dashboard</a> */}
                <a className='py-3 text-dark' onClick={handleBar} href="#how">How it works</a>
                <a href="#" className='py-3 text-dark' onClick={handleBar}>Get Started</a>
                <a href="#" className='px-4 bg-dark py-2 text-light rounded' onClick={handleBar}>Login</a>
            </div>

        </>
    )
}

export default Header;