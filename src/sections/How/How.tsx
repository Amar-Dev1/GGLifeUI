import React from 'react';

import './How.css';

import MainTitle from '../../components/MainTitle';
import Step from '../../components/Step';

import signupImg from '../../assets/signup.png';
import dashboardImg from '../../assets/dashboard.png';



const How: React.FC = () => {
    return (
        <div id='how' className='container'>
            <MainTitle head='How it works' bio='Being Successful and getting better has never been easier' headSize='38px' />
            <div className="row mt-5">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <Step title="1. Sign up" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. vv" img={signupImg} btn={{
                        title: 'Sign up',
                        color: 'black',
                        backgroundColor: 'white',

                    }} />
                </div>
                <div className="col-md-6 my-3">
                    <Step className='step-2' title='discover the dashboard' description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. vv" img={dashboardImg} />
                </div>
                <div className="col-md-6 my-3">
                    <Step className='step-3' title='start your journey !' description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. vv" img={dashboardImg} />
                </div>
            </div>
        </div>
    )
}

export default How;