import React from "react";
import Illustration1 from "../assets/images/illustration-editor-mobile.svg";
import Illustration2 from "../assets/images/illustration-editor-desktop.svg";
import aboutData from "../data/content.json";
import SectionComponent from "../components/SectionComponent";
import { fadeInX } from "../utils/animatedVariants";

export default function About() {
  const data = aboutData.about;

  return (
    <SectionComponent
      variant={fadeInX("positive")}
      heading="Designed for the future"
      data={data}
      illustrationMobile={Illustration1}
      illustrationDesktop={Illustration2}
      section="pb-56 pt-[6.25rem] lg:pt-[9.5rem] lg:pb-0"
      container="lg:flex-row-reverse lg:pl-36"
      img="lg:scale-[1.3] lg:translate-x-20 lg:translate-y-20 xl:-translate-y-24 xl:translate-x-44"
      wrapper="lg:pt-24"
      textWrapper="lg:pb-[4.7rem]"
      title="text-[1.6rem] text-very-dark-blue lg:text-[2.35rem]"
      description="px-4"
    />
  );
}
