import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
export interface GGLinkProps {
    title: string;
    takeTo?:LinkProps['to'];
    className?: string;
    style?: React.CSSProperties;
    onClick?:()=> void;
}

const GGLink: React.FC<GGLinkProps> = ({ title, takeTo, style, className,onClick }) => {

    return (
        <Link id='gg-link' to={takeTo || ''} style={style} className={className} onClick={onClick}>{title}</Link>
    )
}

export default GGLink;