import React from 'react'
import { About, Contact, Features, Header, How, Landing, Showcase } from '../..';
const HomePage: React.FC = () => {
    return (
        <>
            <div className="hero py-5 min-h-screen">
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