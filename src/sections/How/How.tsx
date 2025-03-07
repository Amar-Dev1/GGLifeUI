import React from 'react';
import { MainTitle, Step, dashboardImg, discoverImg, registerImg } from '../..';

const How: React.FC = () => {
    return (
        <div id='how' className='container w-[95%] lg:w-[90%] mx-auto py-28'>
            <MainTitle head='How it works' bio='Being successful and achieving growth has never been more intentional.' headClassname='text-xl md:text-2x lg:text-5xl' />
            <div className="grid grid-cols-1 mt-5">
                <div className="">
                    <Step stepClassName='step-1 flex-col lg:flex-row' title="1. Sign up" description="Create your free account in seconds and unlock instant access to a suite of tools designed to streamline your personal and professional growth." img={registerImg} btn={{
                        title: 'Sign up',
                        className: 'text-black !important bg-white',
                        takeTo: '/signup',
                    }} />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mt-5">
                <div className="">
                    <Step stepClassName='flex-col' title='2. Discover the dashboard' description="Navigate a clean, intuitive interface where tasks, notes, and weekly planners align seamlessly. Customize your workspace to reflect your unique goals and priorities." img={dashboardImg} />
                </div>
                <div className="">
                    <Step stepClassName='flex-col' title='3. Start your journey !' description="Begin planning your week, completing tasks, and tracking milestones with actionable insights. Watch progress unfold as you move closer to your aspirations, day by day." img={discoverImg} />
                </div>
            </div>
        </div>

    )
}
export default How;