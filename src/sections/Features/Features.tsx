import React from 'react';
import './Features.css';
import noteIcon from '../../assets/note.png';
import taskIcon from '../../assets/task.png';
import habitIcon from '../../assets/habit.png';
import trackIcon from '../../assets/tracking.png';
import { FeatureProps } from '../../components/Feature';
import { MainTitle, Feature } from '../../../index'

const Features: React.FC = () => {

    // all features in array
    const allFeatures: FeatureProps[] = [
        { id: 1, icon: noteIcon, title: 'Create notes', description: 'blablabla' },
        { id: 2, icon: taskIcon, title: 'Make tasks', description: 'blablabla' },
        { id: 3, icon: habitIcon, title: 'set habits', description: 'blablabla' },
        { id: 4, icon: trackIcon, title: 'track your progress', description: 'blablabla' },
    ]

    return (
        <>
            <div id="features" className='container-fluid'>
                <div className="container">
                    <MainTitle head='Time to grow your life with GGLife ✨' bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr' headColor='black' headSize='42px' />
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