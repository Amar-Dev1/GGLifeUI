import React, { useEffect, useState } from "react";
import { barIcon, arrowDown, GGlink, gglifeLogo } from "../..";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { User } from "lucide-react";

const Header: React.FC = () => {
const auth = useAuth()

  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isAuth, setisAuth] = useState<boolean | null>(null)

useEffect(()=>{
  setisAuth(auth);
},[])

  const handleBar = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div
        id="header"
        className="w-[95%] lg:w-[90%] container bg-gray-50 backdrop:blur-sm flex justify-between items-center p-3 mx-auto rounded-full"
      >
        <Link to={"/"} className="flex justify-around items-center">
          <img src={gglifeLogo} alt="" width={"26px"} />
          <span className="logo font-bold text-2xl mx-2">GGLife</span>
        </Link>
        <div className="wide-nav hidden lg:flex xl:flex">
          <a className="px-4 py-2 mx-1 text-black" href="/">
            Home
          </a>
          <a className="px-4 py-2 mx-1 text-black" href="#how">
            How it works
          </a>

          <div className="about-link px-4 py-2 mx-1 text-black cursor-pointer relative group">
            about
            <img
              src={arrowDown}
              alt=""
              className="w-2.5 absolute right-0 top-1/2 -translate-y-1/2 group-hover:rotate-180 transition-all"
            />
            <div className="about-links w-60 h-auto bg-[rgba(230,230,230,.7)] rounded-2xl flex flex-col p-5 shadow absolute left-1/2 top-10 -translate-x-1/2 z-[99] pointer-events-none scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
              <a
                href="#showcase"
                className="block text-black my-1 hover:translate-x-4 transition-transform duration-300"
              >
                Why GGLife ?
              </a>
              <hr className="opacity-25" />
              <a
                href="#about"
                className="block text-black my-1 hover:translate-x-4 transition-transform duration-300"
              >
                About GGLife
              </a>
            </div>
          </div>
          <a className="px-4 py-2 mx-1 text-black" href="#contact">
            Contact us
          </a>
        </div>
        {isAuth ? (
          <Link
            to={"/dashboard"}
            className="hidden lg:block xl:block lg:mr-2.5 xl:mr-2.5"
          >
            <User size={38} />
          </Link>
        ) : (
          <div className="sub-wide-nav hidden lg:flex xl:flex">
            <a href="/signup" className="px-4 mx-2 py-3 text-black">
              Get Started
            </a>
            <GGlink
              title="Login"
              className="bg-black text-white px-4"
              takeTo={"/login"}
            />
          </div>
        )}

        <div
          className="group bar-wrapper lg:hidden xl:hidden sm:block md:block w-6 cursor-pointer"
          onClick={handleBar}
          tabIndex={0}
        >
          <img src={barIcon} alt="" className="w-full" />
        </div>
      </div>
      {isClicked && ( // overlay 👇
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(33, 33, 33, 0.5)] backdrop-blur-md z-[98]"></div>
      )}
      <div
        className={`narrow-nav text-center flex flex-col justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(230,230,230,0.5)] shadow-lg shadow-gray-400 rounded-4xl w-4/5 h-7/10 z-[99] scale-0 transition-all duration-300 ${
          isClicked ? "scale-100 opacity-100" : ""
        } `}
      >
        <span
          className="cursor-pointer mb-3 text-xl absolute top-4 right-3"
          onClick={handleBar}
        >
          ❌
        </span>
        <a className="py-3 mt-6 text-black" onClick={handleBar} href="/">
          Home
        </a>
        <div
          className="about-link mx-auto py-3 text-black group cursor-pointer relative"
          tabIndex={0}
        >
          about
          <img
            src={arrowDown}
            alt=""
            className="w-2.5 absolute top-1/2 -right-4 -translate-y-1/2 group-focus:rotate-180 transition-all"
          />
          <div className="about-links w-56 bg-[rgba(230,230,230,.7)] backdrop-blur-lg rounded-2xl flex flex-col py-2 px-3 shadow absolute left-1/2 top-12 -translate-x-1/2 scale-0 group-focus:scale-100 transition-all duration-300">
            <a href="#showcase" className="text-black my-1" onClick={handleBar}>
              Why GGLife ?
            </a>
            <hr className="opacity-25" />
            <a href="#about" className="text-black my-1" onClick={handleBar}>
              About GGLife
            </a>
          </div>
        </div>
        <a className="py-3 text-black mx-auto" onClick={handleBar} href="#how">
          How it works
        </a>
        <a
          className="py-3 text-black mx-auto"
          onClick={handleBar}
          href="#contact"
        >
          Contact us
        </a>
        {auth ? (
          <Link to={"/dashboard"} className="mx-auto mt-3" onClick={handleBar}>
            <User size={38} />
          </Link>
        ) : (
          <>
            <a href="/signup" className="py-3 text-black" onClick={handleBar}>
              Get Started
            </a>
            <GGlink
              title="Login"
              takeTo={"/Login"}
              className="text-white mx-auto px-6"
              onClick={handleBar}
            />
          </>
        )}
      </div>
    </>
  );
};
export default Header;
