import React from 'react'
import './Contact.css';
import MainTitle from '../../components/MainTitle';

import contactImg from '../../assets/contact.jpg'

const Contact: React.FC = () => {
    return (
        <div id='contact' className=''>
            <h3>this section still in progress!</h3>
            <div className="roww row w-100 d-flex justify-content-center align-items-center">
                <div className="form-col col-md-6 py-4">
                    <form action="" className='d-flex justify-content-center align-items-center flex-column px-4 py-5'>
                        <MainTitle head='Contact us' headColor='white' headSize='38px' />
                        <div className="input-group">
                            <input type="text" name='name' placeholder='Your Name' />
                            <input type="email" name='email' placeholder='Email' />
                        </div>
                        <div className="input-group">
                            <textarea name='message' className='w-100 my-2'></textarea>
                        </div>
                        <button type="submit" className='btn btn-dark bg-white text-dark py-2 px-4 my-4'>Send</button>
                    </form>
                </div>
                <div className="col-md-6 img-col d-flex justify-content-end align-items-center">
                    <div className="img-wrapper d-flex justify-content-center align-items-center">
                        <img src={contactImg} alt="" className='w-100' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;