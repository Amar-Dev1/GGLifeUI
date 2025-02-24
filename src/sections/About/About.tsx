import React from 'react'
import './About.css';
import MainTitle from '../../components/MainTitle'
import aboutVid from '../../assets//about-video.mp4';

const About: React.FC = () => {
    return (
        <div id='about'>
            <MainTitle head='About GGLife' bio='lormelasdkjfa0dsf asdfa sdfasdfl;kjalsdfo' headColor='black' headSize='38px' />
            <div className="container">
                <div className="row d-flex align-items-center justify-content-between ">
                    <div className="col-md-6">
                        <p>At GGLife, we believe in pushing boundaries and creating extraordinary experiences. Founded with a vision to revolutionize the industry, we've grown into a dynamic force that combines innovation with human-centered design.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, adipisci reprehenderit alias voluptatum ut quis quod laboriosam, dicta dolor exercitationem nobis rerum laborum nemo. Totam esse repellat deleniti nisi neque!</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <video className='about-vid' src={aboutVid} loop={true} muted={true} autoPlay={true}>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
