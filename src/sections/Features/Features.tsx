import React from 'react';
import './Features.css';
import { FeatureProps } from '../../components/Feature';
import { MainTitle, Feature, noteIcon, taskIcon, habitIcon, trackIcon } from '../../index'

const Features: React.FC = () => {
    const allFeatures: FeatureProps[] = [
        { id: 1, icon: noteIcon, title: 'Create notes', description: 'Capture your thoughts effortlessly.' },
        { id: 2, icon: taskIcon, title: 'Make tasks', description: 'Stay on top of your to-do list.' },
        { id: 3, icon: habitIcon, title: 'Plan your week ', description: 'Plan your week in a perfect and exciting way !' },
        { id: 4, icon: trackIcon, title: 'Track your progress', description: 'Visualize your growth and achievements.' },
    ]
    return (
        <>
            <div id="features" className='container-fluid'>
                <div className="container">
                    <MainTitle head='Time to grow your life with GGLife ✨' bio='Elevate productivity and personal growth by organizing tasks, notes, and weekly planning in one cohesive platform. Track progress with precision and unlock your potential.' headColor='black' headSize='42px' />
                    <div className="row py-4 mt-5">
                        {
                            allFeatures.map(item => (
                                <div className="col-md-6 my-2 d-flex justify-content-center align-items-center" key={item.id}>
                                    <Feature title={item.title} icon={item.icon} description={item.description} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;