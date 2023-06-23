import React from "react";
import Logo from "../components/Logo";
import NavList from "../components/NavList";

export default function Footer() {
  return (
    <footer className="rounded-tr-large bg-very-dark-black-blue py-4 lg:pb-0 lg:pl-[10.35rem] lg:pr-[15.5rem] lg:text-left">
      <nav className="lg:flex lg:justify-start lg:gap-[11.5rem]" aria-label="Footer Navigation">
        <Logo className="max-w-[6.5rem] py-16 lg:py-[3.3rem]" />
        <NavList
          container="lg:gap-20 xl:gap-[12.9rem]"
          list="py-4 lg:pb-14 lg:pt-[3.7rem] lg:text-sm even:pr-[1.1rem]"
          item="text-white lg:pb-[0.2rem]"
        />
      </nav>
    </footer>
  );
}
