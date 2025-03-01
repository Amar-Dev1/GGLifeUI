import React from 'react';
import '../Layout.css';
import { barIcon, testImg, userImg, logoutImg, sunImg, moonImg } from '../../../..';
import { useTheme } from '../../../../components/ThemeProvider';

export interface DashbarProps {
    isClicked?: boolean;
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dashbar: React.FC<DashbarProps> = ({ isClicked, setIsClicked }) => {

    const { theme, toggleTheme } = useTheme();

    const handleClick = () => setIsClicked(!isClicked)
    return (
        <div className={`dashbar bg-light shadow p-3 my-3 rounded d-flex align-items-center justify-content-around ${theme}`}>
            <div className="bar-wrapper" onClick={handleClick}>
                <img src={barIcon} alt="" loading='lazy' width={'20px'} className='bar-icon icon' />
            </div>
            <div className="theme-wrapper mx-3" onClick={toggleTheme}>
                {theme === 'dark' ? (
                    < img src={sunImg} alt="" loading='lazy' width={'25px'} className='icon' />
                ) : (
                    < img src={moonImg} alt="" loading='lazy' width={'25px'} className='icon' />
                )
                }
            </div>
            <div className='profile-wrapper' tabIndex={0}>
                <img src={testImg} alt="" className='w-100 rounded-circle border' loading='lazy' />
                <div className="details d-flex flex-column justify-content-center p-3 rounded">
                    <div className="user d-flex  align-items-center mb-1">
                        <div className="user-img d-flex justify-content-center align-items-center">
                            <img src={testImg} alt="" loading='lazy' className='w-100 rounded-circle border' />
                        </div>
                        <div className="user-name">
                            <p className='m-0 fw-bold'>Fulan</p>
                            <p className='m-0'>user</p>
                        </div>
                    </div>
                    <hr className='m-0' />
                    <div className="options my-2">
                        <a href="#" className='option d-block my-3 fw-bold text-muted'><img src={userImg} alt="" width='22px' />Profile</a>
                        <a href="#" className='option d-block my-3 fw-bold text-muted'><img src={logoutImg} alt="" width='22px' />Logout</a>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
export default Dashbar;