import React, { useState } from "react";
import list from "../data/navlist.json";
import AnimatedComponent from "./AnimatedComponent";
import { AnimatePresence } from "framer-motion";
import { dropDownFadeInY } from "../utils/animatedVariants";

export default function NavList({ isHeader, ...className }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const active = activeDropdown !== null;

  return (
    <div className={`lg:flex ${className.container}`}>
      {list.map((item, index) => (
        <div key={index} className={`${className.list}`}>
          <p
            role={isHeader ? "button" : undefined}
            aria-haspopup={isHeader ? "true" : undefined}
            className={`relative pb-2  ${className.item}
             ${activeDropdown === index ? "after:-rotate-180" : ""}  
             ${isHeader ? "list-after line line1 font-medium lg:pl-[1.2rem] lg:text-white" : "font-semibold"}`}
            onClick={() => handleDropdown(index)}>
            {item.heading}
          </p>

          <AnimatePresence>
            {(isHeader && activeDropdown === index) || !isHeader ? (
              <AnimatedComponent
                tag="ul"
                exit="exit"
                variants={dropDownFadeInY}
                className={`pb-3.5 pt-[1.7rem]
              ${
                active
                  ? "m-2 mx-auto rounded-lg bg-gray-100 py-2 lg:absolute lg:top-28 lg:w-[10.5rem] lg:bg-white lg:py-[1.4rem] lg:pl-5 lg:pr-16 lg:text-left lg:shadow-2xl"
                  : ""
              } `}>
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex} className={`py-1 lg:pb-2 lg:pt-[0.3rem] ${active ? "pb-3" : ""}`}>
                    <a
                      href="#"
                      className={`text-grayish-blue ${!isHeader ? "line line2 relative" : ""}
                    ${active ? "text-very-dark-blue lg:hover:font-medium" : ""}`}>
                      {subItem}
                    </a>
                  </li>
                ))}
              </AnimatedComponent>
            ) : null}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
