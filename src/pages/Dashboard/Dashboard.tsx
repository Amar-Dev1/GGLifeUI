import React, { useState } from 'react'
import './Dashboard.css';
import { Sidebar, Dashbar, Content } from '../../../index';

const Dashboard: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    return (
        <div id='dashboard' className=''>
            <Sidebar isClicked={isSidebarOpen} setIsClicked={setIsSidebarOpen} />
            <div className="main-content">
                <Dashbar isClicked={isSidebarOpen} setIsClicked={setIsSidebarOpen} />
                <Content />
            </div>
        </div>
    )
}
export default Dashboard;