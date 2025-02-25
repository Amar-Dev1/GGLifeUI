import React from 'react';
import './Features.css';
import noteIcon from '../../assets/note.png';
import taskIcon from '../../assets/task.png';
import habitIcon from '../../assets/habit.png';
import trackIcon from '../../assets/tracking.png';
import { FeatureProps } from '../../components/Feature';
import { MainTitle, Feature } from '../../../index'

const Features: React.FC = () => {
    const allFeatures: FeatureProps[] = [
        { id: 1, icon: noteIcon, title: 'Create notes', description: 'Capture your thoughts effortlessly.' },
        { id: 2, icon: taskIcon, title: 'Make tasks', description: 'Stay on top of your to-do list.' },
        { id: 3, icon: habitIcon, title: 'set habits', description: 'Build lasting, positive routines.' },
        { id: 4, icon: trackIcon, title: 'track your progress', description: 'Visualize your growth and achievements.' },
    ]
    return (
        <>
            <div id="features" className='container-fluid'>
                <div className="container">
                    <MainTitle head='Time to grow your life with GGLife ✨' bio='Elevate productivity and personal growth by organizing tasks, notes, and habits in one cohesive platform. Track progress with precision and unlock your potential.' headColor='black' headSize='42px' />
                    <div className="row py-4 mt-5">
                        {
                            allFeatures.map(item => (
                                <div className="col-md-6 my-2" key={item.id}>
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