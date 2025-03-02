import React, { useEffect } from 'react'
import Contact from '../../sections/Contact/Contact';
import MainTitle from '../../components/MainTitle';
import { emailImg, passwordImg } from '../..';
const Login: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div id='login' className='d-flex flex-column justify-content-center align-items-center p-5 shadow' style={{ minHeight: '100vh' }}>
                <MainTitle head='Welecome back ⚡' />
                <div style={{ height: '75vh', width: '75vw' }} className="position-relative bg-light d-flex flex-column justify-content-center align-items-center  p-3 border-primary rounded-4 shadow">
                    <form action="" method='POST' onSubmit={(e) => e.preventDefault()} style={{ width: '80%' }}>
                        <div className="input-group my-2">
                            <label htmlFor="email" className='mb-1'><img src={emailImg} alt="" width={'20px'} className='mx-2' />Your email</label>
                            <input type="email" name="email" id="email" className='form-control rounded-4 w-100 ' />
                        </div>
                        <div className="input-group my-2">
                            <label htmlFor="password" className='mb-1'><img src={passwordImg} alt="" width={'20px'} className='mx-2' />Your password</label>
                            <input type="password" name="password" id="password" className='form-control rounded-4 w-100 ' />
                        </div>
                        <a href="">forget password?</a>
                        <button className='btn btn-dark w-100 rounded-4 my-3'>Login →</button>
                        <a href="/signup">dont have an account? Register</a>
                    </form>
                </div>
            </div>
            <Contact />
        </>
    )
}
export default Login;