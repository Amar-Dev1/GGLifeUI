import React from 'react'
import { MainTitle, aboutVid } from '../..';

const About: React.FC = () => {
    return (
        <div id='about' className='bg-white py-28'>
            <div className="container w-[95%] lg:w-[90%] mx-auto">
                <MainTitle head='About GGLife' bio='A brief information about us' headColor='black' headSize='38px' />
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                        <div className="">
                            <p>At GGLife, we empower individuals to take charge of their personal growth through intentional, structured living. Our platform is designed to simplify daily productivity, foster meaningful habits, and provide clarity in tracking progress—helping you turn aspirations into achievements.</p>
                            <br />
                            <p>Founded on the belief that growth thrives in simplicity, GGLife combines intuitive design with actionable tools. We’re committed to revolutionizing self-improvement by prioritizing user-centric innovation, enabling you to organize tasks, capture ideas, and build consistency—one step at a time.</p>
                        </div>
                        <div className="flex justify-center lg:justify-end mt-5 lg:mt-0">
                            <video className='about-vid' src={aboutVid} loop={true} muted={true} autoPlay={true} preload='none'>
                            </video>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default About;