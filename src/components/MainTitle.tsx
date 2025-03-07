import React from 'react';
interface MainTitle {
    head: string;
    bio?: string;
    headColor?: string;
    headSize?: string;
    headClassname?: string;

}

const MainTitle: React.FC<MainTitle> = ({ head, bio, headColor: color, headSize: fontSize, headClassname }) => {
    return (
        <div className={`main-title text-center flex justify-center items-center flex-col`}>
            <h2 style={{ color, fontSize }} className={`font-bold ${headClassname}`}>{head}</h2>
            <p className='text-sm my-3 text-gray-500 w-[65%]'>{bio}</p>
        </div>
    )
}

export default MainTitle;