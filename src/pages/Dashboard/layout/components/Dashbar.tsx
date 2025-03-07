import React, { useRef, useState } from 'react';
import '../Layout.css';
import { barIcon, testImg, userImg, logoutImg, sunImg, moonImg, MainTitle, editImg } from '../../../..';
import { Link } from 'react-router-dom';
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
        <div className={`relative shadow py-3 px-4 mb-5 flex items-center rounded-2xl ${theme === 'dark' ? 'bg-[#2a2b3f]' : 'bg-white'}`}>
            <div className="cursor-pointer block lg:hidden w-[25px]" onClick={handleClick}>
                <img src={barIcon} alt="" loading='lazy' className={`w-full ${theme === 'dark' ? 'invert-100' : ''}`} />
            </div>
            <div className="theme-wrapper cursor-pointer w-[30px] mx-3 lg:mx-0" onClick={toggleTheme}>
                {theme === 'dark' ? (
                    < img src={sunImg} alt="" loading='lazy' className={`w-full ${theme === 'dark' ? 'invert-100' : ''} `} />
                ) : (
                    < img src={moonImg} alt="" loading='lazy' className={`w-full`} />
                )
                }
            </div>
            <div className='w-[45px] cursor-pointer ml-auto group' tabIndex={0}>
                <img src={testImg} alt="" className='w-100 rounded-full border-1 border-gray-300' loading='lazy' />
                <div className={`w-[210px] h-auto px-3 flex flex-col justify-center rounded-2xl absolute top-18 right-6 shadow scale-0 group-focus:scale-100 transition-all duration-300 ${theme === 'dark' ? 'bg-[#2a2b3f] drop-shadow-2xl text-white' : 'bg-white'}`}>
                    <div className="flex items-center p-3 mb-1">
                        <div className="w-[45px] mr-3 flex justify-center items-center">
                            <img src={testImg} alt="" loading='lazy' className='w-full rounded-full border-1 border-gray-300' />
                        </div>
                        <div className="user-name">
                            <p className='m-0 font-bold'>Fulan</p>
                            <p className='m-0'>user</p>
                        </div>
                    </div>
                    <hr className='opacity-25' />
                    <div className="options my-2">
                        <Link to={'#'} className={`my-3 font-bold text-gray-500 flex hover:translate-x-2 transition-transform ${theme === 'dark' ? 'text-white' : ''}`} onClick={() => setIsOpen(!isOpen)}><img src={userImg} alt="" className={`w-[20px] mr-2 ${theme === 'dark' ? 'invert-100' : ''}`} />Profile</Link>
                        <Link to={'/logout'} className={`my-3 font-bold text-gray-500 flex hover:translate-x-2 transition-transform ${theme === 'dark' ? 'text-white' : ''}`}><img src={logoutImg} alt="" className={`w-[20px] mr-2 ${theme === 'dark' ? 'invert-100' : ''}`} />Logout</Link>
                    </div>
                </div>
            </div>
            <div>
            </div>
            {
                isOpen &&
                <>
                    <div className="form-overlay"></div>
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
                </>
            }
        </div>
    )
}
export default Dashbar;