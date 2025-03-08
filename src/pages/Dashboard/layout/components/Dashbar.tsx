import React, { useRef, useState } from 'react';
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
            inputRef.current.style.outline ='1px solid red';
        }
    };

    const handleButton = () => {
        setShowOkButton(true);
    };

    const handleClick = () => setIsClicked(!isClicked)
    return (
        <div className={`relative shadow py-3 px-4 my-2 flex items-center rounded-2xl ${theme === 'dark' ? 'bg-[#2a2b3f]' : 'bg-white'}`}>
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
                <img src={testImg} alt="" className='w-full rounded-full border-1 border-gray-300' loading='lazy' />
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
                isOpen && // overlay 👇
                <div className={`fixed top-0 left-0 w-full h-full bg-[rgba(33, 33, 33, 0.5)] backdrop-blur-md z-[98]`}></div>
            }
            <div className={`w-[80vw] min-h-[60%] lg:w-[55%] lg:min-h[70%]  z-[99] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed flex flex-col p-7 rounded-2xl shadow-2xl scale-0 transition-all ${theme === 'dark' ? 'bg-[#2a2b3f] text-white drop-shadow-2xl' : 'bg-white text-black'} ${isOpen ? 'scale-100' : ''}`}>
                <MainTitle head='Your profile' headClassname='text-md lg:text-2xl'/>
                <button className={`text-black p-2 font-bold absolute right-6 top-6 cursor-pointer flex justify-center items-center rounded-full ${theme === 'dark' ? 'text-white' : ''}`} onClick={() => setIsOpen(!isOpen)}>✖</button>
                <form action="" method='POST' className='w-full' onSubmit={(e)=> e.preventDefault()}>
                    <div className="relative my-3">
                        <div className="profile-img w-[50px]"><img src={testImg} alt="" className='rounded-full border-1 border-gray-400 my-2' /></div>
                        <input type="file" name="image" id='image' />
                    </div>
                    <div className="relative my-3">
                        <label htmlFor="name">Your name</label>
                        <input type="text" name="name" id='name' className='relative py-1 px-3 w-full rounded-md bg-[#f8f9fa] text-black' required readOnly={true} ref={nameInputRef} onChange={handleButton} />
                        <button className='absolute bg-gray-200 top-6 right-0 rounded-r-md flex justify-center items-center cursor-pointer w-8 h-8 p-1 ' onClick={() => handleInput('name')}><img src={editImg} alt="" /></button>
                    </div>
                    <div className="relative my-3">
                        <label htmlFor="name">Your Email</label>
                        <input type="email" name="email" className='relative py-1 px-3 w-full rounded-md bg-[#f8f9fa] text-black' required readOnly={true} ref={emailInputRef} onChange={handleButton} />
                        <button className='absolute bg-gray-200 top-6 right-0 rounded-r-md flex justify-center items-center cursor-pointer w-8 h-8 p-1 ' onClick={() => handleInput('email')}><img src={editImg} alt="" /></button>
                    </div>
                    {
                        showOkButton &&
                        <div className="w-full text-center mt-4">
                            <button className={`bg-black rounded-2xl font-bold py-1 px-4 cursor-pointer hover:-translate-y-1 transition-transform ${theme === 'dark' ? 'bg-white text-black' : 'text-white'}`}>Ok</button>
                        </div>
                    }
                </form>
            </div>

        </div>
    )
}
export default Dashbar;