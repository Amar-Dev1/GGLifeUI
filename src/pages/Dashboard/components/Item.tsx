import './styles.css';

import { Link } from 'react-router-dom';

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
    return (
        <Link to={`${route}`} className={`item d-block my-1 py-2 px-3 rounded d-flex align-items-center ${isActive ? 'active' : ''} ${itemClass}`} onClick={onClick} >
            <img src={icon} alt="" width={iconWidth} height={iconHeight} className={`icon`} style={iconStyle} />
            <span className={`title mx-2`} style={titleStyle}>{title}</span>
        </Link>
    )
}

export default Item;