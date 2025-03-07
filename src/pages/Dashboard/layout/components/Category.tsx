import { ItemProps } from './Item';
import { Item } from '../../../..';

interface CatProps {
    catTitle?: string;
    items: ItemProps[];
    activeItem: string | null;
    setActiveItem: (title: string) => void;
    catTitleClass?: string;
}

const Category: React.FC<CatProps> = ({ catTitle, items, activeItem, setActiveItem, catTitleClass }) => {
    return (
        <div className={`pl-1 my-3`}>
            {
                catTitle &&
                <>
                    <small className={`relative text-md text-gray-500 block my-4 uppercase ${catTitleClass} before:absolute before:top-1/2 before:translate-y-1/2 before:-left-10 before:w-8 before:h-[.5px] before:bg-gray-400 before:opacity-85 before:rounded-full before:content-[""]`}>{catTitle}</small>
                </>
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