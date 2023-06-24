import React, { useState } from "react";
import Button from "../components/Button";
import NavList from "../components/NavList";
import Logo from "../components/Logo";
import Ham from "../assets/icons/icon-hamburger.svg";
import AnimatedComponent from "../components/AnimatedComponent";
import { fadeInY } from "../utils/animatedVariants";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header className="bg lg:bg-big rounded-bl-large bg-pattern-mobile-gradient bg-no-repeat pb-[2.3rem] pt-10 md:px-9 lg:bg-pattern-desktop-gradient lg:pl-36 lg:pr-28 lg:pt-12 xl:pr-36">
      <AnimatedComponent
        tag="nav"
        variants={fadeInY(0.25)}
        className="nav flex justify-between lg:pr-0"
        aria-label="Main Navigation">
        <Logo className="max-w-[5.2rem] lg:max-w-[10rem]" />
        <button onClick={handleClick} className="lg:hidden" aria-label="Menu Button">
          <img src={Ham} alt="" />
        </button>
        <div
          className={`top-32 w-[calc(100vw-3.2rem)] rounded-md bg-white p-5 lg:items-start lg:justify-between lg:bg-transparent lg:py-0 lg:pl-12 lg:pr-0
          ${isVisible ? "absolute shadow-2xl " : "hidden lg:flex"}`}>
          <NavList
            isHeader={true}
            list="pt-2 pb-3.5"
            item="flex lg:pr-1 justify-center cursor-pointer text-very-dark-blue"
          />
          <div className="flex flex-col items-center justify-center gap-3 border-[0.001px] border-x-transparent border-b-transparent border-t-very-dark-grayish-blue py-4 lg:flex-row lg:border-transparent lg:py-0">
            <Button text="Login" className="px-10 lg:px-[1.4rem]  lg:py-[0.1rem] lg:text-white" />
            <Button
              text="Sign Up"
              className="hover:btn-red bg-gradient-to-r from-redish-0 to-redish-1 px-10 text-white lg:mr-4 lg:bg-white lg:bg-none lg:py-2 lg:text-light"
            />
          </div>
        </div>
      </AnimatedComponent>
      <AnimatedComponent
        tag="div"
        variants={fadeInY(0.75)}
        className="px-10 pb-[5.1rem] pt-[5.8rem] leading-[1.4] text-white">
        <div>
          <h1 className="text-[2.05rem] lg:text-[3.7rem]">A modern publishing platform</h1>
          <p className="py-2.5 text-[1.1rem] lg:text-xl">Grow your audience and build your online brand</p>
        </div>
        <div className="flex justify-center px-1 py-[2.3rem]">
          <Button text="Start for Free" className="hover:btn-red bg-white px-[1.1rem] text-light" />
          <Button text="Learn More" className="hover:btn-white ml-4 border border-white px-6" />
        </div>
      </AnimatedComponent>
    </header>
  );
}
