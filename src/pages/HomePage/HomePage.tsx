import React from "react";
import {
  About,
  Contact,
  Features,
  Header,
  How,
  Landing,
  Showcase,
  FadeIn,
  GoUp,
} from "../..";
import { useEffect, useState } from "react";

const HomePage: React.FC = () => {
  const [showBtn, setShowBtn] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY >= 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleGoUp = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <div className="hero py-5 min-h-screen">
        <Header />
        <FadeIn>
          <Landing />
        </FadeIn>
      </div>
      <FadeIn>
        <Features />
      </FadeIn>
      <FadeIn>
        <How />
      </FadeIn>
      <FadeIn>
        <Showcase />
      </FadeIn>
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
      {showBtn && <GoUp onclick={handleGoUp} status={showBtn} />}
    </>
  );
};

export default HomePage;
