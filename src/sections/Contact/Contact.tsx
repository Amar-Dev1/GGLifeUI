import React from 'react'
import './Contact.css';
import { MainTitle } from '../..';

const Contact: React.FC = () => {
    return (
        <>
            <div id='contact' className='bg-black text-white flex justify-center py-4 min-h-screen'>
                <div className="container w-[95%] lg:w-[90%] flex flex-col justify-center items-center">
                    <MainTitle head='Contact us' headClassname='text-4xl' />
                    <form action="" className="w-full lg:w-1/2 flex flex-col justify-center items-center my-3 z-10 ">
                        <div className="w-full flex flex-col lg:flex-row my-2 ">
                            <input type="text" name="name" id="" className='basis-full my-2 mr-0 lg:mr-1 rounded-lg px-5 py-2 bg-[aliceblue] text-black focus:scale-[1.02] transition-transform' placeholder='Your Name' />
                            <input type="email" name="" id="" className='basis-full my-2 mr-0 lg:ml-1 rounded-lg px-5 py-2 bg-[aliceblue] text-black focus:scale-[1.02] transition-transform' required placeholder='Your Email' />
                        </div>
                        <div className=" w-full">
                            <textarea name="" id="" className="w-full min-h-56 rounded-xl px-5 py-3 bg-[aliceblue] text-black focus:scale-[1.02] transition-transform" required placeholder='Say Hello 👋' />
                        </div>
                        <button type='submit' className='w-full text-black bg-[aliceblue] font-bold mt-3 py-2 rounded-lg cursor-pointer hover:-translate-y-1 transition-all '>Send !</button>
                    </form>
                </div>
            </div>
            <div id="footer" className='bg-black py-7 flex justify-center items-center -t-amber-50'>
                <p className='font-bold text-gray-400'>Copyright © 2025 GGLife. All rights reserved</p>
            </div>
        </>
    )
}
export default Contact;