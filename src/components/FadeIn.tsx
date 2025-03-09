import React, { useState, useRef, useEffect } from 'react'
import '../index.css'
interface FadeInProps {
    children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observe = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observe.unobserve(element);
                }
            },
            { threshold: 0.2 }
        );
        observe.observe(element)
        return () => observe.disconnect()
    }, [])

    return (
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
            {children}
        </div>
    )
}

export default FadeIn;