import React from 'react'
import '../App.css';
import { About, Contact, Features, Header, How, Landing, Showcase } from '../../index.tsx';

const HomePage: React.FC = () => {


    return (
        <>
            <div className="hero py-4">
                <Header />
                <Landing />
                <Features />
                <About />
                <How />
                <Showcase />

                <Contact />
            </div>
        </>
    )
}

export default HomePage;