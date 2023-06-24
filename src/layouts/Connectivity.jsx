import React from "react";
import Phones from "../assets/images/illustration-phones.svg";
import AnimatedComponent from "../components/AnimatedComponent";
import { fadeInY, popOut, stagger } from "../utils/animatedVariants";

export default function Connectivity() {
  return (
    <section className="bg2 lg:bg-big2 relative rounded-bl-large rounded-tr-large bg-pattern-circles-gradient bg-no-repeat pb-[6.5rem] pt-56 text-white sm:pt-96 lg:flex lg:justify-end lg:pt-28 xl:pb-24 xl:pr-32">
      <div>
        <AnimatedComponent
          tag="img"
          variants={popOut}
          src={Phones}
          alt=""
          className="absolute -top-[11.5rem] left-0 right-0 m-auto lg:-left-[40rem] lg:-top-16"
        />
      </div>
      <AnimatedComponent
        tag="div"
        variants={stagger("negative")}
        className="leading-loose md:m-auto md:max-w-xl lg:m-0 lg:text-left">
        <h2 className="py-1 text-4xl leading-snug ">State of the Art Infrastructure</h2>
        <AnimatedComponent tag="p" variants={fadeInY(0.8)} className="px-7 py-3 lg:pl-0">
          With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
          This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
        </AnimatedComponent>
      </AnimatedComponent>
    </section>
  );
}
