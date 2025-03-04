import React from 'react';
import '../Layout.css';
import { MainTitle } from '../../../..';
interface DashCardProps {
    cardClassName?: string;
    cardTitle: string;
    cardDes?:string;
    children: React.ReactNode;
}

const DashCard: React.FC<DashCardProps> = ({ children, cardClassName, cardTitle,cardDes }) => {
    return (
        <div className={`dash-card rounded p-3 shadow ${cardClassName}`}>
            <MainTitle head={cardTitle} bio={cardDes} headSize='24px'/>
            {children}
        </div>
    )
}

export default DashCard;