import React, { useState } from 'react'
import { Category, gglifeLogo, taskImg, notImg, notesImg, habbitsImg, logoutImg, tasksImg, panelmg, historyImg } from '../../../../index';
import { useTheme } from '../../../../components/ThemeProvider';

export interface SidebarProps {
    isClicked?: boolean;
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isClicked = false, setIsClicked }) => {
    const [activeItem, setActiveItem] = useState<string | null>(`Dashboard`);
    const { theme } = useTheme();

    return (
        <div className={`sidebar fixed top-0 -left-[250px] lg:left-0 h-screen w-0 lg:w-[250px] overflow-y-auto flex flex-col p-6 z-[999] shadow opacity-0 lg:opacity-100 transition-all ${isClicked ? 'translate-x-[250px] w-full opacity-100' : ''} ${theme === 'dark' ? 'bg-[#2a2b3f] text-white' : 'bg-white'}`}>
            <div className={`head-wrapper w-[230px] p-0 lg:py-9 flex justify-center items-center fixed top-[2%] left-1/2 -translate-x-1/2 lg:top-0 lg:left-0 lg:translate-x-0 z-[999] ${theme === 'dark' ? 'bg-[#2a2b3f]' : 'bg-white'}`}>
                <img src={gglifeLogo} alt="" className='w-[29px] mr-1' />
                <h3 className='font-bold p-0 m-0 text-xl lg:text-3xl'>GGLife</h3>
            </div>
            <div className={`mt-24 p-0 ${theme === 'dark' ? 'text-white' : ''}`}>
                {
                    isClicked &&
                    <button className="cursor-pointer p-2 font-bold absolute right-[10px] top-[10px] w-[40px] h-[40px] rounded-full z-[1000]" onClick={() => setIsClicked(false)}>✖</button>
                }
                <Category
                    catTitle='Home'
                    items={[
                        {
                            title: 'Dashboard',
                            icon: panelmg,
                            onClick: () => setIsClicked(false),
                            itemClass: 'p-0 m-0 font-bold'
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
                            itemClass: 'bg-red-500 font-bold text-white opacity-100',
                            isActive: true,
                            onClick: () => setIsClicked(false),
                            titleStyle: { opacity: '1' },
                            iconStyle: { opacity: '1', filter: 'invert(100)' },
                            route: '/logout',
                        },

                    ]}
                    activeItem={activeItem} setActiveItem={setActiveItem}
                />
            </div>
        </div>

    )
}

export default Sidebar;