import React, { useEffect, useRef, useState } from "react";
import { Contact, GGlink } from "../..";
import { useParams } from "react-router-dom";
import axios from "axios";

const Verification: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { token } = useParams();
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");

  const [resendEmail, setResendEmail] = useState("");
  const [resendMessage, setResendMessage] = useState("");

  const [remainingTime, setRemainingTime] = useState(60); // 1 minute = 60 seconds
  const [isDisabled, setIsDisabled] = useState(false); // Track button state
  const resendBtn = useRef<HTMLButtonElement | null>(null); // Ref for button
  
  useEffect(() => {
    const verify = async () => {
      try {
        if (token) {
          const res = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/auth/verify-email/${token}`
          );
          if (res.status === 200) {
            setVerified(true);
          } else {
            setError("Verification failed.");
          }
          console.log("verified successfully");
        }
      } catch (err: any) {
        setError("Invalid or expired token.");
      } finally {
        setLoading(false);
      }
    };
    if (token) verify();
  }, [token]);
  

  const handleResend = async () => {
    try {
      setLoading(true);
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/resend-verification-email`,
        { email: resendEmail }
      );
      setResendMessage("✅ Verification email resent. Check your inbox!");
       
      setIsDisabled(true);
      if(resendBtn.current){
        resendBtn.current.disabled = true;
      }
      let timeLeft = 60; // Initial time for countdown

      const timer = setInterval(() => {
        timeLeft -= 1;
        setRemainingTime(timeLeft); // Update remaining time
        if (timeLeft <= 0) {
          clearInterval(timer); // Clear the timer when time reaches 0
          setIsDisabled(false); // Enable the button after 1 minute
          if (resendBtn.current) {
            resendBtn.current.disabled = false; // Safely re-enable the button
          }
        }
      }, 1000);

    } catch (err: any) {
      setResendMessage(
        err.response?.data?.message || "❌ Failed to resend email."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center p-20">
        <div className="relative h-[75vh] w-[75vw] bg-white flex flex-col justify-center items-center text-center rounded-3xl shadow">
          {!token &&
          <h2 className="my-8 font-bold text-xl lg:text-4xl">
            ✅ Verification email sent. Check your inbox!
          </h2>
          }
          {/* Loading backdrop */}
          {token && loading && (
            <>
              <div className="fixed top-0 left-0 w-full h-full bg-[rgba(33, 33, 33, 0.5)] backdrop-blur-md z-[998]"></div>
              <div
                className={`fixed inset-0 w-full h-full flex items-center justify-center bg-[rgba(255,255,255,0.7)] text-black z-[999] font-bold transition-all
              }`}
              >
                Verifying...
              </div>
            </>
          )}

          {/* Success */}
          {verified ? (
            <>
              <span className="text-2xl">✅</span>
              <h2 className="my-8 font-bold text-xl lg:text-4xl">
                Your email has been successfully verified!
              </h2>
              <GGlink
                title="Go to login"
                takeTo="/login"
                className="bg-black text-white"
              />
            </>
          ) : (
            <>
              <h2 className="my-8 font-bold text-xl lg:text-4xl">{error}</h2>
              <div className="flex flex-col gap-4 items-center mt-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={resendEmail}
                  onChange={(e) => setResendEmail(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md"
                />
                <button
                  onClick={handleResend}
                  ref={resendBtn}
                  className="bg-black text-white px-4 py-2 rounded-md"
                  disabled={isDisabled}
                >
                  {isDisabled ? `Wait to resend again ${remainingTime}s` : "Resend Verification Email"}
                </button>
                {resendMessage && (
                  <p className="text-sm font-medium">{resendMessage}</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Verification;
