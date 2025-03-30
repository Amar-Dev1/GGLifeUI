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
                <Dashbar isClicked={isSidebarOpen} setIsClicked={setIsSidebarOpen} />
                <Content />
            </div>
        </div>
    )
}

export default Layout;