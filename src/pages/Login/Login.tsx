import React, {
  // FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Contact,
  emailImg,
  passwordImg,
  eyeImg,
  eyeSlashImg,
  gglifeLogo,
} from "../..";
// import axios from "axios";
import { Link } from "react-router-dom";

interface UserData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  // const [loading, setLoading] = useState(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [data, setData] = useState<UserData>({
    email: "",
    password: "",
  });
  const handlePassword = () => {
    setVisible(!visible);
    if (passwordInputRef.current) {
      passwordInputRef.current.type =
        passwordInputRef.current?.type === "password" ? "text" : "password";
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const sendData = async (e: FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     setLoading(true);
  //     const response = await axios.post(
  //       `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
  //       {
  //         email: data.email,
  //         password: data.password,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log(response.data);

  //     const token = response.data.token;
  //     localStorage.setItem("token", token);

  //     window.location.href = "/dashboard";
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <div
        id="login"
        className="min-h-screen flex flex-col justify-center items-center p-5 shadow"
      >
        {/* {loading && (
          <>
            <div className="fixed top-0 left-0 w-full h-full bg-[rgba(33, 33, 33, 0.5)] backdrop-blur-md z-[998]"></div>
            <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-[rgba(255,255,255,0.7)] z-[999] font-bold">
              loading...
            </div>
          </>
        )} */}
        <div className="relative min-w-[75vw] min-h-[75vh] bg-[#f8f9fa] flex flex-col justify-center items-center p-3 rounded-2xl shadow">
          <div className="brand flex justify-center items-center my-2">
            <img src={gglifeLogo} alt="⚡" loading="lazy" className="w-6" />
            <h3 className="font-bold text-3xl">GGLife</h3>
          </div>
          <form
            action=""
            method="POST"
            className="w-[80%] py-2"
            // onSubmit={sendData}
          >
            <div className="my-4">
              <label htmlFor="email" className="mb-1 flex">
                <img src={emailImg} alt="" className="mx-2 w-5" />
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-white p-2 shadow rounded-2xl w-full focus:ring-1 focus:shadow-2xl transition-all"
                required
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="my-4 relative">
              <label htmlFor="password" className="mb-1 flex">
                <img src={passwordImg} alt="" className="mx-2 w-5" />
                Your password
              </label>

              <input
                type="password"
                name="password"
                id="password"
                className="bg-white p-2 shadow rounded-2xl w-full focus:ring-1 focus:shadow-2xl transition-all"
                ref={passwordInputRef}
                required
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              {visible ? (
                <img
                  src={eyeSlashImg}
                  alt=""
                  className="w-5 opacity-50 cursor-pointer absolute right-3 bottom-2 z-[99]"
                  onClick={handlePassword}
                />
              ) : (
                <img
                  src={eyeImg}
                  alt=""
                  className="w-5 opacity-50 cursor-pointer absolute right-3 bottom-2 z-[99] "
                  onClick={handlePassword}
                />
              )}
            </div>
            <a href="#" className="text-sm block my-2">
              Forget your password ?
            </a>
            <Link to="/dashboard">
              <button className="bg-black text-white w-full rounded-2xl p-2 my-3 hover:-translate-y-1 transition-all cursor-pointer">
                Login →
              </button>
            </Link>
            <a href="/signup">
              Don`t have an account?{" "}
              <span className="text-blue-500">Register</span>
            </a>
          </form>
        </div>
      </div>

      <Contact />
    </>
  );
};
export default Login;
