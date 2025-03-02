import React, { useState } from 'react'
import '../Layout.css';
import { MainTitle, Category, gglifeLogo, taskImg, notImg, notesImg, habbitsImg, logoutImg, tasksImg } from '../../../../index';
import { useTheme } from '../../../../components/ThemeProvider';

export interface SidebarProps {
    isClicked?: boolean;
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isClicked = false, setIsClicked }) => {

    const { theme } = useTheme()

    const [activeItem, setActiveItem] = useState<string | null>(null);

    return (
        <div className={`sidebar shadow rounded ${isClicked ? 'open' : ''} ${theme}`}>
            <div className={`head-wrapper d-flex justify-content-center align-items-center`}>
                <img src={gglifeLogo} alt="" width={'29px'} style={{ marginBottom: 'auto',marginRight:'5px' }} />
                <MainTitle head='GGLife' headSize='28px' />
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