import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../../components/ThemeProvider";

export interface ItemProps {
  title: string;
  route?: string;
  iconWidth?: string;
  iconHeight?: string;
  isActive?: boolean;
  onClick?: () => void;
  itemClass?: string;
  iconStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  icon: React.ReactNode;
  iconClass?: string;
}

const Item: React.FC<ItemProps> = ({
  title,
  route = "#",
  isActive,
  onClick,
  itemClass,
  titleStyle,
  icon,
  iconClass,
}) => {
  const { theme } = useTheme();

  const computedIconClass = iconClass
    ? iconClass
    : `opacity-45 ${isActive ? "text-white opacity-100" : ""} ${
        theme === "dark" ? "text-white" : ""
      }`;

  const clonedIcon = React.isValidElement(icon)
    ? React.cloneElement(icon as ReactElement<any>, {
        className: computedIconClass,
      })
    : null;

  return (
    <Link
      to={`${route}`}
      className={`item my-1 py-2 px-3 rounded-md flex items-center text-black opacity-85 transition-all ${
        isActive ? "bg-black opacity-100" : ""
      } ${itemClass}`}
      onClick={onClick}
    >
      <span>{clonedIcon}</span>
      <span
        className={`title mx-2 opacity-45 ${
          isActive ? "text-white opacity-100" : ""
        } ${theme === "dark" ? "text-white" : ""}`}
        style={titleStyle}
      >
        {title}
      </span>
    </Link>
  );
};

export default Item;
