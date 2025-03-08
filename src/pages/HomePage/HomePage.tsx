import React from 'react'
import { About, Contact, Features, Header, How, Landing, Showcase,FadeIn } from '../..';
const HomePage: React.FC = () => {
    return (
        <>
            <div className="hero py-5 min-h-screen">
                <Header />
                <FadeIn>
                    <Landing />
                </FadeIn>
            </div>
            <FadeIn>
                <Features />
            </FadeIn>
            <FadeIn>
                <How />
            </FadeIn>
            <FadeIn>
                <Showcase />
            </FadeIn>
            <FadeIn>
                <About />
            </FadeIn>
            <FadeIn>
                <Contact />
            </FadeIn>
        </>
    )
}

export default HomePage;