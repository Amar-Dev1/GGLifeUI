import React from 'react';

export interface GGLinkProps {
    title: string;
    color: string;
    backgroundColor: string;
    padding?: string;
    margin?: string;
    takeTo?: string;
}

const GGLink: React.FC<GGLinkProps> = ({ title, color, backgroundColor, padding, margin, takeTo }) => {

    return (
        <a id='gg-link' href='#' style={{ color: color, backgroundColor: backgroundColor, padding: padding, margin: margin }}>{title}</a>
    )
}

export default GGLink;