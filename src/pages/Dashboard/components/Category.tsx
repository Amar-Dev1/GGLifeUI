import './styles.css';
import { ItemProps } from './Item';
import { Item } from '../../../../index';


interface catProps {
    catTitle: string;
    items: ItemProps[];
    activeItem: string | null;
    setActiveItem: (title: string) => void;
}

const Category: React.FC<catProps> = ({ catTitle, items, activeItem, setActiveItem }) => {


    return (
        <div className='cat my-4'>
            <small className='cat-title text-muted d-block mb-4 text-uppercase'>{catTitle}</small>
            {items.map((item, index) => {
                const itemKey = `${catTitle}:${item.title}`;
                return (
                    <Item
                        key={index}
                        {...item}
                        isActive={activeItem === itemKey}
                        onClick={() => setActiveItem(itemKey)}
                    />
                );
            })}


        </div>
    )
}

export default Category;