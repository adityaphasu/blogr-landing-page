import React from "react";
import Illustration1 from "../assets/images/illustration-laptop-mobile.svg";
import Illustration2 from "../assets/images/illustration-laptop-desktop.svg";
import featuresData from "../data/content.json";
import SectionComponent from "../components/SectionComponent";

export default function Features() {
  const feature = featuresData.features;

  return (
    <>
      <SectionComponent
        heading="Additional Features"
        data={feature}
        illustrationMobile={Illustration1}
        illustrationDesktop={Illustration2}
        section="pt-[4.5rem] pb-12 lg:pb-[14.6rem]"
        container="lg:pr-36"
        img="lg:scale-[1.35] lg:-translate-x-20 lg:translate-y-56  xl:translate-y-[5.5rem] xl:-translate-x-[9.5rem]"
        wrapper="lg:pt-56"
        textWrapper="lg:pb-16 lg:pt-2"
        title="sr-only"
        description="px-2.5 py-[0.28rem]"
      />
    </>
  );
}
