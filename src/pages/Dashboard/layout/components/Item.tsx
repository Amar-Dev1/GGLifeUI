import { Link } from 'react-router-dom';
import { useTheme } from '../../../../components/ThemeProvider';

export interface ItemProps {
    title: string;
    icon: string;
    route?: string;
    iconWidth?: string;
    iconHeight?: string;
    isActive?: boolean;
    onClick?: () => void;
    itemClass?: string;
    iconStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
}

const Item: React.FC<ItemProps> = ({ title, icon, route = '#', iconWidth = '20px', iconHeight, isActive, onClick, itemClass, iconStyle, titleStyle }) => {
    const { theme } = useTheme();
    return (
        <Link to={`${route}`} className={`item my-1 py-2 px-3 rounded-md flex items-center text-black opacity-85 transition-all ${isActive ? 'bg-black opacity-100' : ''} ${itemClass}`} onClick={onClick} >
            <img src={icon} alt="" width={iconWidth} height={iconHeight} className={`icon opacity-45 ${isActive ? 'brightness-100 opacity-100' : ''} ${theme === 'dark' ? 'invert-100' : ''}`} style={iconStyle} />
            <span className={`title mx-2 opacity-45 ${isActive ? 'text-white opacity-100' : ''} ${theme === 'dark' ? 'text-white' : ''}`} style={titleStyle}>{title}</span>
        </Link>
    )
}

export default Item;