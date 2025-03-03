import React, { useState } from 'react'
import '../Layout.css';
import { Category, gglifeLogo, taskImg, notImg, notesImg, habbitsImg, logoutImg, tasksImg, panelmg,historyImg } from '../../../../index';
import { useTheme } from '../../../../components/ThemeProvider';

export interface SidebarProps {
    isClicked?: boolean;
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isClicked = false, setIsClicked }) => {
    const { theme } = useTheme()
    const [activeItem, setActiveItem] = useState<string | null>(`Dashboard`);
    return (
        <div className={`sidebar shadow rounded ${isClicked ? 'open' : ''} ${theme}`}>
            <div className={`head-wrapper d-flex justify-content-center align-items-center`}>
                <img src={gglifeLogo} alt="" width={'29px'} style={{ marginRight: '5px' }} />
                <h3 className='fw-bold -0 m-0'>GGLife</h3>
            </div>
            <div className="cats mt-5">
                {
                    isClicked &&
                    <button className="close-btn p-2 fw-bold" onClick={() => setIsClicked(false)}>✖</button>
                }
                <Category
                catTitle='Home'
                    items={[
                        {
                            title: 'Dashboard',
                            icon: panelmg,
                            onClick: () => setIsClicked(false),
                            itemClass:'p-0 m-0 fw-bold'                          
                        }
                    ]
                }
                    activeItem={activeItem} setActiveItem={setActiveItem}
                    />
                     <Category
                    catTitle='Week planning'
                    items={[
                        {
                            title: 'current plan',
                            icon: habbitsImg,
                            onClick: () => setIsClicked(false)
                        },
                        {
                            title: 'history',
                            icon: historyImg,
                            onClick: () => setIsClicked(false)
                        },
                    ]}
                    activeItem={activeItem} setActiveItem={setActiveItem}
                    />
                <Category
                    catTitle='Tasks'
                    items={[
                        {
                            title: 'All Tasks',
                            icon: tasksImg,
                            onClick: () => setIsClicked(false)
                        },
                        {
                            title: 'Create a Task',
                            icon: taskImg,
                            onClick: () => setIsClicked(false)
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
                            onClick: () => setIsClicked(false)
                        },
                        {
                            title: 'Create a Note',
                            icon: notImg,
                            onClick: () => setIsClicked(false)
                        }
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
                            onClick: () => setIsClicked(false)
                        },

                    ]}
                    activeItem={activeItem} setActiveItem={setActiveItem}
                />
            </div>
        </div>

    )
}

export default Sidebar;