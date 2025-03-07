import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
export interface GGLinkProps {
    title: string;
    takeTo?: LinkProps['to'];
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const GGLink: React.FC<GGLinkProps> = ({ title, takeTo, style, className, onClick }) => {

    return (
        <Link id='gg-link' to={takeTo || ''} style={style} className={`bg-black px-4 py-2 m-1 rounded-full hover:-translate-y-1 inline-block transition-all ${className}`} onClick={onClick}>{title}</Link>
    )
}

export default GGLink;