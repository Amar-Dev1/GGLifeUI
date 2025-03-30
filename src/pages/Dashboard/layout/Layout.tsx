import React, { useState } from 'react'
import { Sidebar, Dashbar, Content } from '../../..';
import { useTheme } from '../../../components/ThemeProvider';

const Layout: React.FC = () => {
    const { theme } = useTheme();
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    return (
        <div id='dashboard' className={`min-h-screen flex ${theme}`}>
            <Sidebar isClicked={isSidebarOpen} setIsClicked={setIsSidebarOpen} />
            <div className={`main-content relative px-3 py-2 grow ml-0 flex flex-col mr-auto transition-all duration-300 lg:ml-[250px] ${theme === 'dark' ? 'bg-[#232333]' : ''}`}>
                {/* <div className="overlay fixed top-0 right-0 w-[80%] h-full bg-[rgba(33, 33, 33, 0.5)] backdrop-blur-md z-[999] flex justify-center items-center"><h1 className='font-bold text-2xl animate-bounce'>still building ...</h1></div> */}
                <Dashbar isClicked={isSidebarOpen} setIsClicked={setIsSidebarOpen} />
                <Content />
            </div>
        </div>
    )
}

export default Layout;