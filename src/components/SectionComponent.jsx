import React from "react";
import AnimatedComponent from "./AnimatedComponent";
import { fadeInY, stagger } from "../utils/animatedVariants";

export default function SectionComponent({
  heading,
  data,
  variant,
  illustrationMobile,
  illustrationDesktop,
  ...classNames
}) {
  return (
    <section className={`${classNames.section} text-very-dark-grayish-blue lg:overflow-hidden`}>
      <AnimatedComponent tag="h2" variants={fadeInY(0.25)} className={classNames.title}>
        {heading}
      </AnimatedComponent>
      <div className={`${classNames.container} lg:flex lg:items-start `}>
        <AnimatedComponent tag="div" variants={variant}>
          <picture>
            <source media="(min-width: 1024px)" srcSet={illustrationDesktop} />
            <img src={illustrationMobile} alt="" className={`m-auto py-14  ${classNames.img}`} />
          </picture>
        </AnimatedComponent>
        <div className={`${classNames.wrapper} md:m-auto md:max-w-md lg:m-0 lg:text-left xl:max-w-xl`}>
          {data.map((content, index) => (
            <AnimatedComponent
              tag="div"
              variants={stagger("negative")}
              key={content.id}
              className={`${classNames.textWrapper} px-4 pb-10 pt-1 leading-loose`}>
              <h3 className="pb-3.5 pl-14 pr-12 text-[1.8rem] leading-[1.1] tracking-tight lg:px-0 lg:pb-6">
                {content.title}
              </h3>
              <AnimatedComponent
                tag="p"
                variants={fadeInY(0.8)}
                className={`${index === 1 ? "pt-2 lg:pt-0" : ""} ${classNames.description} lg:px-0`}>
                {content.description}
              </AnimatedComponent>
            </AnimatedComponent>
          ))}
        </div>
      </div>
    </section>
  );
}
