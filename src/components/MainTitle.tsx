// gloabal component

import React from 'react'

interface MainTitle {
    head: string;
    bio?: string;
    headColor?: string;
    headSize?:string;
}

const MainTitle: React.FC<MainTitle> = ({ head, bio, headColor: color,headSize:fontSize }) => {
    return (
        <div className='main-title text-center d-flex justify-content-center align-items-center flex-column'>
            <h2 style={{ color, fontSize}} className='fw-bold'>{head}</h2>
            <p className='' style={{fontSize:'16px', opacity:'.6',width:'60%'}}>{bio}</p>
        </div>
    )
}

export default MainTitle;