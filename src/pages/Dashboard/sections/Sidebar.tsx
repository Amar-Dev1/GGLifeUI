import React, { useState } from 'react'
import '../Dashboard.css';
import { MainTitle, Category } from '../../../../index';
import taskImg from '../../../assets/dashboard/task.svg';
import tasksImg from '../../../assets/dashboard/tasks.svg';
import notImg from '../../../assets/dashboard/note.svg';
import notesImg from '../../../assets/dashboard/notes.svg';
import habbitsImg from '../../../assets/dashboard/habits.svg';
import logoutImg from '../../../assets/dashboard/logout.svg';

export interface SidebarProps {
    isClicked?: boolean;
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isClicked=false, setIsClicked }) => {

    const [activeItem, setActiveItem] = useState<string | null>(null);

    return (
        <div className={`sidebar shadow rounded ${isClicked ? 'open' : ''}`}>
            <div className='head-wrapper '>
                <MainTitle head='⚡ GGLife' headSize='28px' />
                {
                    isClicked &&
                    <button className="close-btn p-2 fw-bold" onClick={() => setIsClicked(false)}>✖</button>
                }
            </div>
            <div className="cats my-5">
                <Category
                    catTitle='Tasks'
                    items={[
                        {
                            title: 'All Tasks',
                            icon: tasksImg,
                            route:'/dashboard/no'
                            
                        },
                        {
                            title: 'Create a Task',
                            icon: taskImg,
                        }
                        
                    ]
                    
                }
                
                activeItem={activeItem} setActiveItem={setActiveItem}
                />
                <Category
                    catTitle='Notes'
                    items={[
                        {
                            title: 'My Notes',
                            icon: notesImg,
                        },
                        {
                            title: 'Create a Note',
                            icon: notImg,
                        }
                    ]}
                    activeItem={activeItem} setActiveItem={setActiveItem}
                />
                <Category
                    catTitle='Habits'
                    items={[
                        {
                            title: 'View my habbits',
                            icon: habbitsImg,
                        },
                    ]}
                    activeItem={activeItem} setActiveItem={setActiveItem}
                />
                <Category
                    catTitle='Account'
                    items={[
                        {
                            title: 'Logout',
                            icon: logoutImg,
                            itemClass: 'bg-danger active',
                        },

                    ]}
                    activeItem={activeItem} setActiveItem={setActiveItem}
                />
            </div>
        </div>

    )
}

export default Sidebar;