import React from 'react';
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
            <div id="features" className='bg-[#eee] w-full py-28'>
                <div className="container w-[95%] lg:w-[90%] mx-auto ">
                    <MainTitle head='Time to grow your life with GGLife ✨' bio='Elevate productivity and personal growth by organizing tasks, notes, and weekly planning in one cohesive platform. Track progress with precision and unlock your potential.' headColor='black' headClassname='text-2xl lg:text-5xl' />
                     <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-28">
                        {
                            allFeatures.map(item => (
                                <div className="my-2 flex justify-center items-center" key={item.id}>
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