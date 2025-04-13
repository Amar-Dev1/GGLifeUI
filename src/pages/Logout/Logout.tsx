import React, { useEffect } from "react";
import { Contact, GGlink } from "../..";
const Logout: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = () => {
    window.location.href = "/";
    localStorage.removeItem("token");
  };

  return (
    <>
      <div
        id="logout"
        className="min-h-screen flex flex-col justify-center items-center p-20"
      >
        <div className="relative h-[75vh] w-[75vw] bg-white flex flex-col justify-center items-center text-center  rounded-3xl shadow">
          <GGlink
            title="← Home"
            takeTo="/"
            className="bg-black text-white absolute top-4 left-4"
          />
          <h2 className="mb-3 font-bold text-xl lg:text-4xl">
            Are you sure to logout ? 😥
          </h2>
          <GGlink
            title="Logout"
            takeTo="#"
            className="bg-black text-white"
            onClick={handleLogout}
          />
        </div>
      </div>
      <Contact />
    </>
  );
};
export default Logout;
