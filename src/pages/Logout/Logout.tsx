import React, { useEffect } from 'react'
import Contact from '../../sections/Contact/Contact';
import GGLink from '../../components/GGlink';
const Logout: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div id='logout' className='d-flex flex-column justify-content-center align-items-center p-5' style={{ minHeight: '100vh' }}>
                <div style={{ height: '75vh', width: '75vw' }} className="position-relative bg-light d-flex flex-column justify-content-center align-items-center text-center p-3 border-primary rounded-4 shadow">
                    <GGLink title='← Home' takeTo='/' className='btn btn-dark position-absolute' style={{ top: '10px', left: '10px' }} />
                    <h2 className='my-3'>Are you sure to logout ? 😥</h2>
                    <GGLink title='Logout' takeTo='#' className='bg-dark text-light' />
                </div>
            </div>
            <Contact />
        </>
    )
}
export default Logout;