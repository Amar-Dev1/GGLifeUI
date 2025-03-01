import React from 'react'
import './Contact.css';
import {MainTitle} from '../..';

const Contact: React.FC = () => {
    return (
        <>
            <div id='contact' className='bg-dark text-light '>
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <MainTitle head='Contact us' />
                    <form action="" className="form w-70 d-flex flex-column justify-content-center align-items-center my-3">
                        <div className="input-group my-2">
                            <input type="text" name="name" id="" className='mx-1 my-1 rounded px-5 py-2' placeholder='Your Name' />
                            <input type="email" name="" id="" className='mx-1 my-1 rounded px-5 py-2' required placeholder='Your Email' />
                        </div>
                        <div className="input-group">
                            <textarea name="" id="" className="w-100 mx-1 rounded px-5 py-3" required placeholder='Say Hello 👋' />
                        </div>
                        <button type='submit' className='btn bg-light text-dark fw-bold my-3'>Send !</button>
                    </form>
                </div>
            </div>
            <div id="footer" className='bg-dark py-4 d-flex justify-content-center align-items-center shadow'>
                <p>Copyright © 2025 GGLife. All rights reserved</p>
            </div>
        </>
    )
}
export default Contact;