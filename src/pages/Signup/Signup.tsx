import React, { useEffect, useState, useRef } from 'react'
import { Contact, usernameImg, emailImg, passwordImg, gglifeLogo, eyeImg, eyeSlashImg } from '../..';
const Signup: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const passwordInputRef = useRef<HTMLInputElement>(null)
    const handlePassword = () => {
        setVisible(!visible);
        if (passwordInputRef.current) {
            passwordInputRef.current.type = passwordInputRef.current?.type === 'password' ? 'text' : 'password';
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div id='signup' className='min-h-screen flex flex-col justify-center items-center p-5 shadow'>
                <div className="relative min-w-[75vw] min-h-[75vh] bg-[#f8f9fa] flex flex-col justify-center items-center p-3 rounded-2xl shadow">
                    <div className="brand flex justify-center items-center my-2">
                        <img src={gglifeLogo} alt="⚡" loading='lazy' className='w-6' />
                        <h3 className='font-bold text-3xl'>GGLife</h3>
                    </div>
                    <form action="" method='POST' className='w-[80%] py-2' onSubmit={(e) => e.preventDefault()}>
                        <div className="my-4">
                            <label htmlFor="name" className='mb-1 flex '><img src={usernameImg} alt="" className='mx-2 w-5' />Your name</label>
                            <input type="text" name="name" id="name" className='bg-white p-2 shadow rounded-2xl w-full focus:ring-1 focus:shadow-2xl transition-all' placeholder='Ahmed, Ali, etc... ' required />
                        </div>
                        <div className="my-4">
                            <label htmlFor="email" className='mb-1 flex'><img src={emailImg} alt="" className='mx-2 w-5' />Your email</label>
                            <input type="email" name="email" id="email" className='bg-white p-2 shadow rounded-2xl w-full focus:ring-1 focus:shadow-2xl transition-all' placeholder='user@example.com, etc...' required />
                        </div>
                        <div className="my-4 relative">
                            <label htmlFor="password" className='mb-1 flex'><img src={passwordImg} alt="" className='mx-2 w-5' />Your password</label>
                            <input type="password" name="password" id="password" className='bg-white p-2 shadow rounded-2xl w-full focus:ring-1 focus:shadow-2xl transition-all' placeholder='San$2001, 3ll200ii, etc...' ref={passwordInputRef} required />
                            {
                                visible ? (<img src={eyeSlashImg} alt="" className='w-5 opacity-50 cursor-pointer absolute right-3 bottom-2 z-[99]' onClick={handlePassword} />) : (
                                    <img src={eyeImg} alt="" className='w-5 opacity-50 cursor-pointer absolute right-3 bottom-2 z-[99] ' onClick={handlePassword} />
                                )
                            }
                        </div>
                        <button className='bg-black text-white w-full rounded-2xl p-2 my-3 hover:-translate-y-1 transition-all cursor-pointer'>Register →</button>
                        <a href="/login">Already have an account? <span className='text-blue-500'>Login</span></a>
                    </form>
                </div>
            </div>
            <Contact />
        </>
    )
}

export default Signup;