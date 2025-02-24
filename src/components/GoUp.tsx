import arrowUp from '../assets/arrow-up.png'

interface GoUpProps {
    status: boolean;
    onclick:()=> void;
}

const GoUp: React.FC<GoUpProps> = ({ status,onclick }) => {
    return (
        <div className={`go-up shadow ${status ? 'visible':'hidden'} `} onClick={onclick}>
            <img src={arrowUp} alt="" className='w-100' />
        </div>
    )
}

export default GoUp;