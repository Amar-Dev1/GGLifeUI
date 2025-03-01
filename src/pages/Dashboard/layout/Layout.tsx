import React, { useState } from 'react'
import './Layout.css';
import { Sidebar, Dashbar, Content } from '../../..';
import { useTheme } from '../../../components/ThemeProvider';

const Layout: React.FC = () => {
    const { theme } = useTheme();
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    return (
        <div id='dashboard' className={`${theme}`}>
            <Sidebar isClicked={isSidebarOpen} setIsClicked={setIsSidebarOpen} />
            <div className="main-content px-4 py-2">
                <Dashbar isClicked={isSidebarOpen} setIsClicked={setIsSidebarOpen} />
                <Content />
            </div>
        </div>
    )
}

export default Layout;