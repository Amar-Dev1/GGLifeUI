import React, { useEffect, useRef, useState } from 'react'
import { Contact, emailImg, passwordImg, eyeImg, eyeSlashImg, gglifeLogo } from '../..';
const Login: React.FC = () => {
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
            <div id='login' className='d-flex flex-column justify-content-center align-items-center p-5 shadow' style={{ minHeight: '100vh' }}>
                <div style={{ height: '75vh', width: '75vw' }} className="position-relative bg-light d-flex flex-column justify-content-center align-items-center  p-3 border-primary rounded-4 shadow">
                    <div className="brand d-flex justify-content-center align-items-center mb-4">
                        <img src={gglifeLogo} alt="⚡" style={{ width: '27px' }} loading='lazy' />
                        <h3 className='fw-bold p-0 m-0'>GGLife</h3>
                    </div>
                    <form action="" method='POST' onSubmit={(e) => e.preventDefault()} style={{ width: '80%' }}>
                        <div className="input-group my-2">
                            <label htmlFor="email" className='mb-1'><img src={emailImg} alt="" width={'20px'} className='mx-2' />Your email</label>
                            <input type="email" name="email" id="email" className='form-control rounded-4 w-100 ' />
                        </div>
                        <div className="input-group my-2">
                            <label htmlFor="password" className='mb-1'><img src={passwordImg} alt="" width={'20px'} className='mx-2' />Your password</label>
                            <input type="password" name="password" id="password" className='form-control rounded-4 w-100 ' ref={passwordInputRef} />
                            {
                                visible ? (<img src={eyeSlashImg} alt="" style={{ width: '20px', opacity: '.5', cursor: 'pointer',position:'absolute',right:'10px',top:'37px',zIndex:'99' }} onClick={handlePassword} />) :
                                    (<img src={eyeImg} alt="" style={{ width: '20px', opacity: '.5', cursor: 'pointer',position:'absolute',right:'10px',top:'37px',zIndex:'99' }} onClick={handlePassword} />)
                            }
                        </div>
                        <a href="">forget password?</a>
                        <button className='btn btn-dark w-100 rounded-4 my-3'>Login →</button>
                        <a href="/signup">New on our platform? <span className='text-primary'>Register</span></a>
                    </form>
                </div>
            </div>
            <Contact />
        </>
    )
}
export default Login;