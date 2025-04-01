import React, { useState } from "react";
import { Category, gglifeLogo } from "../../../index";
import { useTheme } from "../../../components/ThemeProvider";
import {
  SquareChartGantt,
  LayoutDashboard,
  ListTodo,
  Smile,
  Frown,
  CalendarSearch,
  User,
  Bell,
  LogOut,
} from "lucide-react";

export interface SidebarProps {
  isClicked?: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  isClicked = false,
  setIsClicked,
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(`Dashboard`);
  const { theme } = useTheme();

  return (
    <div
      className={`sidebar fixed top-0 -left-[250px] lg:left-0 h-screen w-0 lg:w-[250px] overflow-y-auto flex flex-col p-6 z-[9999] shadow opacity-0 lg:opacity-100 transition-all ${
        isClicked ? "translate-x-[250px] w-full opacity-100" : ""
      } ${theme === "dark" ? "bg-[#2a2b3f] text-white" : "bg-white"}`}
    >
      <div
        className={`head-wrapper w-[230px] p-0 lg:py-9 flex justify-center items-center fixed top-[2%] left-1/2 -translate-x-1/2 lg:top-0 lg:left-0 lg:translate-x-0 z-[999] ${
          theme === "dark" ? "bg-[#2a2b3f]" : "bg-white"
        }`}
      >
        <img src={gglifeLogo} alt="" className="w-[29px] mr-1" />
        <h3 className="font-bold p-0 m-0 text-xl lg:text-3xl">GGLife</h3>
      </div>
      <div className={`mt-24 p-0 ${theme === "dark" ? "text-white" : ""}`}>
        {isClicked && (
          <button
            className="cursor-pointer p-2 font-bold absolute right-[10px] top-[10px] w-[40px] h-[40px] rounded-full z-[1000]"
            onClick={() => setIsClicked(false)}
          >
            ✖
          </button>
        )}
        <Category
          catTitle="Home"
          items={[
            {
              title: "Dashboard",
              onClick: () => setIsClicked(false),
              itemClass: "p-0 m-0 font-bold",
              icon: <LayoutDashboard />,
              route: "/dashboard",
            },
          ]}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <Category
          catTitle="Week planning"
          items={[
            {
              title: "Current plan",
              onClick: () => setIsClicked(false),
              icon: <SquareChartGantt />,
              route: "/dashboard/currentplan",
            },
            {
              title: "Create a plan",
              onClick: () => setIsClicked(false),
              icon: <ListTodo />,
              route: "/dashboard/createplan",
            },
          ]}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <Category
          catTitle="History"
          items={[
            {
              title: "Successful weeks",
              onClick: () => setIsClicked(false),
              icon: <Smile />,
              route: "/dashboard/successfulweeks",
            },
            {
              title: "Failed weeks",
              onClick: () => setIsClicked(false),
              icon: <Frown />,
              route: "/dashboard/faildweeks",
            },
            {
              title: "All weeks",
              onClick: () => setIsClicked(false),
              icon: <CalendarSearch />,
              route: "/dashboard/allweeks",
            },
          ]}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />

        <Category
          catTitle="Settings"
          items={[
            {
              title: "Profile",
              onClick: () => setIsClicked(false),
              icon: <User />,
              route: "/dashboard/profile",
            },
            {
              title: "Notifications",
              onClick: () => setIsClicked(false),
              icon: <Bell />,
              route: "/dashboard/notifications",
            },
          ]}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <Category
          catTitle="Account"
          items={[
            {
              title: "Logout",
              itemClass: "bg-red-500 font-bold text-white opacity-100",
              isActive: true,
              onClick: () => setIsClicked(false),
              titleStyle: { opacity: "1" },
              iconStyle: { opacity: "1", filter: "invert(100)" },
              route: "/logout",
              icon: <LogOut />,
            },
          ]}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </div>
    </div>
  );
};

export default Sidebar;
