import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
export interface GGLinkProps {
    title: string;
    takeTo?:LinkProps['to'];
    className?: string;
    style?: React.CSSProperties;
}

const GGLink: React.FC<GGLinkProps> = ({ title, takeTo, style, className }) => {

    return (
        // <a id='gg-link' href='#' style={{ color: color, backgroundColor: backgroundColor, padding: padding, margin: margin }} className={className}>{title}</a>
        <Link id='gg-link' to={takeTo || ''} style={style} className={className}>{title}</Link>
    )
}

export default GGLink;