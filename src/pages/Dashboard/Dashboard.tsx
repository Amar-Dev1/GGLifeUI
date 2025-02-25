import React from 'react'
import './Dashboard.css';
import Sidebar from './sections/Sidebar';

const Dashboard: React.FC = () => {
    return (
        <div id='dashboard' className='p-4'>
            <Sidebar />
        </div>

    )
}
export default Dashboard;