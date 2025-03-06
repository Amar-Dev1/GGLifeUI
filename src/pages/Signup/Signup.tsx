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
                <div style={{ minHeight: '75vh', minWidth: '75vw' }} className="relative bg-white flex flex-col justify-center items-center p-3 border rounded-4 shadow">
                    <div className="brand flex justify-center items-center">
                        <img src={gglifeLogo} alt="⚡" loading='lazy' className='w-5'/>
                        <h3 className='font-bold'>GGLife</h3>
                    </div>
                    <form action="" method='POST' className='w-[80%]' onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group my-2">
                            <label htmlFor="name" className='mb-1'><img src={usernameImg} alt="" width={'20px'} className='mx-2' />Your name</label>
                            <input type="text" name="name" id="name" className='form-control rounded-4 w-100 ' placeholder='Ahmed, Ali, etc... ' />
                        </div>
                        <div className="input-group my-2">
                            <label htmlFor="email" className='mb-1'><img src={emailImg} alt="" width={'20px'} className='mx-2' />Your email</label>
                            <input type="email" name="email" id="email" className='form-control rounded-4 w-100 ' placeholder='user@example.com, etc...' />
                        </div>
                        <div className="input-group my-2">
                            <label htmlFor="password" className='mb-1'><img src={passwordImg} alt="" width={'20px'} className='mx-2' />Your password</label>
                            <input type="password" name="password" id="password" className='form-control rounded-4 w-100 ' placeholder='San$2001, 3ll200ii, etc...' ref={passwordInputRef} />
                            {
                                visible ? (<img src={eyeSlashImg} alt="" style={{ width: '20px', opacity: '.5', cursor: 'pointer', position: 'absolute', right: '10px', top: '37px', zIndex: '99' }} onClick={handlePassword} />) :
                                    (<img src={eyeImg} alt="" style={{ width: '20px', opacity: '.5', cursor: 'pointer', position: 'absolute', right: '10px', top: '37px', zIndex: '99' }} onClick={handlePassword} />)
                            }
                        </div>
                        <button className='btn btn-dark w-100 rounded-4 my-3'>Register →</button>
                        <a href="/login">Already have an account? <span className='text-primary'>Login</span></a>
                    </form>
                </div>
            </div>
            <Contact />
        </>
    )
}

export default Signup;