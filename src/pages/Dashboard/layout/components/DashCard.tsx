import React from 'react';
import { MainTitle } from '../../../..';
import { useTheme } from '../../../../components/ThemeProvider';
interface DashCardProps {
    cardClassName?: string;
    cardTitle: string;
    cardDes?: string;
    children: React.ReactNode;
}

const DashCard: React.FC<DashCardProps> = ({ children, cardClassName, cardTitle, cardDes }) => {
    const { theme } = useTheme()
    return (
        <div className={`min-h-[220px] rounded-2xl p-3 shadow-md ${cardClassName} ${theme === 'dark' ? 'bg-[#2a2b3f] shadow-2xl text-white border border-gray-700' : 'bg-white '}`}>
            <MainTitle head={cardTitle} bio={cardDes} headSize='24px' />
            {children}
        </div>
    )
}

export default DashCard;