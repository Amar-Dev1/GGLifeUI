import React, { useRef, useState } from 'react';
import '../Layout.css';
import { barIcon, testImg, userImg, logoutImg, sunImg, moonImg, MainTitle, editImg } from '../../../..';
import { useTheme } from '../../../../components/ThemeProvider';

export interface DashbarProps {
    isClicked?: boolean;
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dashbar: React.FC<DashbarProps> = ({ isClicked, setIsClicked }) => {
    const { theme, toggleTheme } = useTheme();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [showOkButton, setShowOkButton] = useState(false);

    const nameInputRef = useRef<HTMLInputElement | null>(null);
    const emailInputRef = useRef<HTMLInputElement | null>(null);

    const handleInput = (inputType: 'name' | 'email') => {
        const inputRef = inputType === 'name' ? nameInputRef : emailInputRef;

        if (inputRef.current) {
            inputRef.current.readOnly = false;
            inputRef.current.focus();
        }
    };

    const handleButton = () => {
        setShowOkButton(true);
    };


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
                    <div className="user d-flex align-items-center mb-1">
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
                        <a href="#" className='option d-block my-3 fw-bold text-muted' onClick={() => setIsOpen(!isOpen)}><img src={userImg} alt="" width='22px' />Profile</a>
                        <a href="#" className='option d-block my-3 fw-bold text-muted'><img src={logoutImg} alt="" width='22px' />Logout</a>
                    </div>
                </div>
            </div>
            <div>
            </div>
            {
                isOpen &&
                <div className="user-form-popup position-fixed d-flex flex-column p-4 rounded-3 shadow">
                    <MainTitle head='Your profile' />
                    <button className='close-btn text-dark p-2 fw-bold position-absolute' onClick={() => setIsOpen(!isOpen)}>✖</button>
                    <form action="" method='POST' onSubmit={(e) => e.preventDefault()} className='w-100'>
                        <div className="input-group-prepend my-3">
                            <div className="profile-img"><img src={testImg} alt="" width={'70px'} className='rounded-circle border my-2' /></div>
                            <input type="file" name="image" id='image' />
                        </div>
                        <div className=" input-group-prepend my-3">
                            <label htmlFor="name">Your name</label>
                            <input type="text" name="name" id='name' className='position-relative rounded form-control' required readOnly={true} ref={nameInputRef} onChange={handleButton} />
                            <button className='edit-btn position-absolute rounded' onClick={() => handleInput('name')}><img src={editImg} alt="" width={'18px'} /></button>
                        </div>
                        <div className=" input-group-prepend my-3">
                            <label htmlFor="name">Your Email</label>
                            <input type="email" name="email" className='position-relative rounded form-control' required readOnly={true} ref={emailInputRef} onChange={handleButton} />
                            <button className='edit-btn position-absolute rounded' onClick={() => handleInput('email')}><img src={editImg} alt="" width={'18px'} /></button>
                        </div>
                        {
                            showOkButton &&
                            <div className="w-100 text-center">
                                <button className={`btn btn-dark text-light rounded fw-bold ok-btn`}>Ok</button>
                            </div>
                        }
                    </form>
                </div>
            }
        </div>
    )
}
export default Dashbar;