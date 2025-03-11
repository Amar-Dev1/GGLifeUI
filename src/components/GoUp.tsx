import arrowUp from '../assets/arrow-up.png'
interface GoUpProps {
    status: boolean;
    onclick: () => void;
}
const GoUp: React.FC<GoUpProps> = ({ status, onclick }) => {
    return (
        <div className={`fixed bottom-5 right-5 bg-transparent shadow-md border-2 border-gray-300 w-10 p-2 rounded-full flex justify-center items-center cursor-pointer z-[999] hover:-translate-y-1 transition-all ${status ? 'visible' : 'invisible'} `} onClick={onclick}>
            <img src={arrowUp} alt="" className='w-full' />
        </div>
    )
}
export default GoUp;