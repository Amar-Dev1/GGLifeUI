import '../Layout.css';
import { ItemProps } from './Item';
import { Item } from '../../../..';

interface CatProps {
    catTitle?: string;
    items: ItemProps[];
    activeItem: string | null;
    setActiveItem: (title: string) => void;
    catTitleClass?:string;
}

const Category: React.FC<CatProps> = ({ catTitle, items, activeItem, setActiveItem,catTitleClass }) => {
    return (
        <div className='cat my-3'>
            {
                catTitle &&
                <small className={`cat-title text-muted d-block mb-4 text-uppercase ${catTitleClass}`}>{catTitle}</small>
            }
            {items.map((item, index) => {
                const itemKey = `${item.title}`;
                return (
                    <Item
                        key={index}
                        {...item}
                        isActive={activeItem === itemKey}
                        onClick={() => {
                            setActiveItem(itemKey);
                            item.onClick?.();
                        }}
                    />
                );
            })}
        </div>
    )
}
export default Category;