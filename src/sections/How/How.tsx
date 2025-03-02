import React from 'react';
import './How.css';
import { MainTitle, Step, dashboardImg,discoverImg, registerImg } from '../..';

const How: React.FC = () => {
    return (
        <div id='how' className='container'>
            <MainTitle head='How it works' bio='Being successful and achieving growth has never been more intentional.' headSize='38px' />
            <div className="row mt-5">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <Step stepClassName='step-1' title="1. Sign up" description="Create your free account in seconds and unlock instant access to a suite of tools designed to streamline your personal and professional growth." img={registerImg} btn={{
                        title: 'Sign up',
                        className: 'bg-light text-dark',
                        takeTo: '/signup',
                    }} />
                </div>
                <div className="col-md-6 my-3">
                    <Step stepClassName='step-2' title='2. Discover the dashboard' description="Navigate a clean, intuitive interface where tasks, notes, and habit trackers align seamlessly. Customize your workspace to reflect your unique goals and priorities." img={dashboardImg} />
                </div>
                <div className="col-md-6 my-3">
                    <Step stepClassName='step-3' title='3. Start your journey !' description="Begin building habits, completing tasks, and tracking milestones with actionable insights. Watch progress unfold as you move closer to your aspirations, day by day." img={discoverImg} />
                </div>
            </div>
        </div>
    )
}
export default How;