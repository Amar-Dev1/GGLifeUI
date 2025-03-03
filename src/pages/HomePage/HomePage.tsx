import React from 'react'
import './HomePage.css';
import { About, Contact, Features, Header, How, Landing, Showcase } from '../../index.ts';
const HomePage: React.FC = () => {
    return (
        <>
            <div className="hero py-4">
                <Header />
                <Landing />
            </div>
            <Features />
            <How />
            <Showcase />
            <About />
            <Contact />
        </>
    )
}

export default HomePage;